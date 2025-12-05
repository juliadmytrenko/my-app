import Link from "next/link";
import Layout from "../../../../components/Layout";
import { getPostData, getSortedPostsData } from "../../../../lib/posts";
import { notFound } from "next/navigation";

function formatDate(dateString: string) {
  const d = new Date(dateString);
  if (isNaN(d.getTime())) return dateString;
  return d.toLocaleDateString("pl-PL", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

interface Params {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({ id: post.id }));
}

export default async function Post({ params }: Params) {
  try {
    const { id } = await params; // await rozpakowanie Promise
    const post = await getPostData(id);
    if (!post) return notFound();

    return (
      <Layout>
        <div className="max-w-3xl mx-auto">
          <nav className="mb-4">
            <Link
              href="/"
              className="inline-block text-pink-600 hover:text-purple-600 font-medium bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-pink-100"
            >
              ← Powrót
            </Link>
          </nav>

          <article className="prose lg:prose-xl max-w-none bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-2xl border border-pink-100">
            <header className="mb-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white rounded-full px-4 py-2 shadow-md">
                <span className="text-2xl">🎀</span>
                <h1 className="text-2xl font-bold tracking-tight">
                  {post.title}
                </h1>
              </div>
              <p className="mt-3 text-pink-600 text-sm">
                <span aria-hidden>📅</span>{" "}
                <span className="font-medium">{formatDate(post.date)}</span>
              </p>
            </header>

            <div className="prose prose-lg max-w-none text-gray-700">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </div>

            <footer className="mt-8 text-center">
              <p className="text-sm text-purple-600">
                ✨ Thank you for reading. ✨
              </p>
            </footer>
          </article>
        </div>
      </Layout>
    );
  } catch (err) {
    return notFound();
  }
}
