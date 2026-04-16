import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://fawarisone.com",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://fawarisone.com/about",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://fawarisone.com/services",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://fawarisone.com/contact",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://fawarisone.com/blog",
      lastModified: new Date("2025-01-15"),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];
}
