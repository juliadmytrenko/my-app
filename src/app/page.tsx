import { getSortedPostsData } from "@/../lib/posts";
import Link from "next/link";
import Layout from "@/../components/Layout";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
          Latest Posts
        </h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border-b-2 border-pink-200 pb-4 hover:bg-pink-50 rounded-lg px-4 py-3 transition-colors"
            >
              <Link
                href={`/posts/${post.id}`}
                className="text-pink-600 hover:text-purple-600 font-semibold text-lg transition-colors"
              >
                {post.title}
              </Link>
              <p className="text-purple-500 text-sm mt-1">📅 {post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
