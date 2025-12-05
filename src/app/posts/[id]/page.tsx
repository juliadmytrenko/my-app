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
        <article className="prose prose-lg max-w-none">
          <h1>{post.title}</h1>
          <p className="text-gray-500 text-sm">{formatDate(post.date)}</p>
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>
      </Layout>
    );
  } catch (err) {
    return notFound();
  }
}
