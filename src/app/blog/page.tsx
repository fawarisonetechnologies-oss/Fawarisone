import Link from "next/link";
import { blogs } from "../../data/blogs";

export default function BlogPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Our Blogs</h1>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.slug} className="border p-4 rounded-md hover:shadow">
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-xl font-semibold">{blog.title}</h2>
            </Link>
            <p className="text-gray-600 text-sm">{blog.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
