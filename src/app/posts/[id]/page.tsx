import Link from "next/link";
import Layout from "../../../../components/Layout";
import { getPostData, getSortedPostsData } from "../../../../lib/posts";
import { notFound } from "next/navigation";
import Comments from "../../../../components/Comments";

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
        <div className="w-full">
          <nav className="mb-4">
            <Link
              href="/"
              className="inline-block text-pink-600 hover:text-purple-600 font-medium bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm border border-pink-100 text-sm sm:text-base"
            >
              ← Powrót
            </Link>
          </nav>

          <article className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl max-w-none bg-gradient-to-br from-pink-50 to-purple-50 p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-2xl border border-pink-100 overflow-hidden">
            <header className="mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 sm:gap-3 px-2 sm:px-4 py-2 flex-wrap">
                <span className="text-xl sm:text-2xl">🎀</span>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight break-words">
                  {post.title}
                </h1>
              </div>
              <p className="mt-3 text-pink-600 text-xs sm:text-sm">
                <span aria-hidden>📅</span>{" "}
                <span className="font-medium">{formatDate(post.date)}</span>
              </p>
            </header>

            <div className="markdown break-words overflow-wrap-anywhere overflow-x-hidden">
              <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
            </div>

            <footer className="mt-6 sm:mt-8 text-center">
              <p className="text-xs sm:text-sm text-purple-600">
                ✨ Thank you for reading. ✨
              </p>
            </footer>
          </article>

          <Comments />
        </div>
      </Layout>
    );
  } catch (err) {
    return notFound();
  }
}
