export type Blog = {
  slug: string;
  title: string;
  content: string;
  date: string;
};

export const blogs: Blog[] = [
  {
    slug: "nextjs-15-intro",
    title: "Introduction to Next.js 15",
    content: "Next.js 15 is amazing because it makes development faster and simpler...",
    date: "2025-09-14",
  },
  {
    slug: "dynamic-routing",
    title: "Dynamic Routing in Next.js",
    content: "Dynamic routing allows you to generate pages based on data...",
    date: "2025-09-14",
  },
  {
    slug: "creating-blog",
    title: "Creating a Blog in Next.js",
    content: "You can easily create a blog using the app directory in Next.js...",
    date: "2025-09-14",
  },
];
