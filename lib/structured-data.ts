interface BlogPostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: { name: string };
  tags: string[];
}

export function generateBlogPostStructuredData(post: BlogPostData, baseUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `${baseUrl}/blog/${post.slug}`,
    datePublished: new Date(post.date).toISOString(),
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    keywords: post.tags.join(", "),
  };
}

export function generateWebsiteStructuredData(url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Ryan Sharma",
    description:
      "Quality electronic components for hobbyists, students, and makers. Arduino, Raspberry Pi, sensors, and DIY kits shipped Australia-wide from Sydney.",
    url: url,
    telephone: "+61400213791",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Seven Hills",
      addressRegion: "NSW",
      postalCode: "2147",
      addressCountry: "AU",
    },
  }
}
