import { getSortedPostsData } from "@/../lib/posts";
import Link from "next/link";
import Layout from "@/../components/Layout";

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Latest Posts</h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="border-b pb-4">
              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                {post.title}
              </Link>
              <p className="text-gray-500 text-sm mt-1">{post.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
