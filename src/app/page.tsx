import { getSortedPostsData } from "@/../lib/posts";
import Link from "next/link";
import Layout from "@/../components/Layout";

function formatDate(dateString: string) {
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Home() {
  const posts = getSortedPostsData();

  return (
    <Layout>
      <div className="space-y-6">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Latest Posts
        </h2>
        <ul className="space-y-4 list-none pl-0">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border-b-2 border-pink-200 pb-4 hover:bg-pink-50 rounded-lg px-2 sm:px-4 py-3 transition-colors"
            >
              <Link
                href={`/posts/${post.id}`}
                className="text-pink-600 hover:text-purple-600 font-semibold text-base sm:text-lg transition-colors break-words"
              >
                {post.title}
              </Link>
              <p className="text-purple-500 text-sm mt-1">
                📅 {formatDate(post.date)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
