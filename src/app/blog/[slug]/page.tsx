import { blogs } from "../../../data/blogs";
import { Metadata } from "next";

type Params = { params: { slug: string } };

// Dynamic metadata for SEO
export function generateMetadata({ params }: Params): Metadata {
  const blog = blogs.find((b) => b.slug === params.slug);
  return {
    title: blog?.title || "Blog not found",
    description: blog?.content.slice(0, 100) || "No description",
  };
}

type Props = { params: { slug: string } };

export default function BlogDetail({ params }: Props) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) {
    return <p className="p-8">Blog not found.</p>;
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
      <p className="text-gray-500 mb-6">{blog.date}</p>
      <div className="text-lg">{blog.content}</div>
    </div>
  );
}
