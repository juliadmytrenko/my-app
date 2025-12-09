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
        <h2 className="text-4xl font-bold bg-gradient-to-r from-pink-200 via-purple-200 to-pink-100 bg-clip-text text-transparent mb-8">
          Latest Posts
        </h2>
        <ul className="space-y-4 list-none pl-0">
          {posts.map((post) => (
            <li
              key={post.id}
              className="border-l-4 border-pink-400/40 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-xl px-4 sm:px-6 py-4 transition-all duration-300 hover:border-pink-300 hover:shadow-lg hover:shadow-pink-500/20"
            >
              <Link
                href={`/posts/${post.id}`}
                className="text-white hover:text-pink-100 font-semibold text-base sm:text-lg transition-colors break-words no-underline"
              >
                {post.title}
              </Link>
              <p className="text-pink-200 text-sm mt-2">
                📅 {formatDate(post.date)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}
