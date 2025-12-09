import { describe, it, expect, vi, beforeEach } from 'vitest'
import fs from 'fs'
import { getSortedPostsData, getPostData } from './posts'

// Mock the file system module so we can control what it returns
vi.mock('fs')

describe('Posts Functions', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    vi.clearAllMocks()
  })

  describe('getSortedPostsData', () => {
    it('returns empty array when posts folder does not exist', () => {
      // Tell the mock that the directory doesn't exist
      vi.mocked(fs.existsSync).mockReturnValue(false)
      
      // Call the function
      const result = getSortedPostsData()
      
      // Check if it returns an empty array
      expect(result).toEqual([])
    })

    it('returns posts sorted by date (newest first)', () => {
      // Create fake post files
      const mockFiles = ['old-post.md', 'new-post.md']
      const oldPost = '---\ntitle: Old Post\ndate: 2024-01-01\n---\nOld content'
      const newPost = '---\ntitle: New Post\ndate: 2024-12-01\n---\nNew content'

      // Mock file system responses
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(mockFiles as any)
      vi.mocked(fs.statSync).mockReturnValue({ isFile: () => true } as any)
      vi.mocked(fs.readFileSync)
        .mockReturnValueOnce(oldPost)  // First call returns old post
        .mockReturnValueOnce(newPost)  // Second call returns new post

      const result = getSortedPostsData()

      // Newest post should be first
      expect(result[0].title).toBe('New Post')
      expect(result[1].title).toBe('Old Post')
    })

    it('ignores non-markdown files', () => {
      // Mix of markdown and other files
      const mockFiles = ['post.md', 'image.png', 'another.md']
      const mockPost = '---\ntitle: Test\ndate: 2024-01-01\n---\nContent'

      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.readdirSync).mockReturnValue(mockFiles as any)
      vi.mocked(fs.statSync).mockReturnValue({ isFile: () => true } as any)
      vi.mocked(fs.readFileSync).mockReturnValue(mockPost)

      const result = getSortedPostsData()

      // Should only return 2 posts (ignoring image.png)
      expect(result).toHaveLength(2)
    })
  })

  describe('getPostData', () => {
    it('throws error when post file does not exist', async () => {
      // Mock that the file doesn't exist
      vi.mocked(fs.existsSync).mockReturnValue(false)

      // Expect the function to throw an error
      await expect(getPostData('missing-post')).rejects.toThrow('Post file not found')
    })

    it('returns post with HTML content', async () => {
      // Create a fake markdown post
      const mockPost = '---\ntitle: My Post\ndate: 2024-01-01\n---\n# Hello'

      // Mock file system
      vi.mocked(fs.existsSync).mockReturnValue(true)
      vi.mocked(fs.statSync).mockReturnValue({ isFile: () => true } as any)
      vi.mocked(fs.readFileSync).mockReturnValue(mockPost)

      const result = await getPostData('test-post')

      // Check the result
      expect(result.title).toBe('My Post')
      expect(result.contentHtml).toContain('<h1>Hello</h1>')
    })
  })
})
