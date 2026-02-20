import { ProjectsPageContent } from "@/components/public/projects/projects-page-content";
import type { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rsmakes.com';

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore open source projects, electronics builds, and maker tools. From Arduino and Raspberry Pi projects to web applications and DIY electronics.",
  keywords: ["open source", "Arduino projects", "Raspberry Pi projects", "electronics builds", "maker tools"],
  openGraph: {
    title: "Projects — Ryan Sharma",
    description: "Open source projects, electronics builds, and maker tools.",
    url: `${baseUrl}/projects`,
    type: "website",
    images: [
      {
        url: `${baseUrl}/og-image-projects.png`,
        width: 1200,
        height: 630,
        alt: "Ryan Sharma Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects — Ryan Sharma",
    description: "Open source projects, electronics builds, and maker tools.",
    images: [`${baseUrl}/og-image-projects.png`],
  },
  alternates: {
    canonical: `${baseUrl}/projects`,
  },
};

export default function ProjectsPage() {
  return (
    <div className="pt-24">
      <ProjectsPageContent />
    </div>
  );
}
