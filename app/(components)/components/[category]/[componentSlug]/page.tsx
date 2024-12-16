import ComponentDetailPage from "@/components/pages/ComponentDetailPage";
import { getAllPostsData, getComponentBySlug } from "@/lib/mdx";
import { notFound } from "next/navigation";
import React from "react";

type Params = Promise<{
  category: string;
  componentSlug: string;
}>;

// Add this to generate static pages for each category
export async function generateStaticParams() {
  const posts = await getAllPostsData(); // You'll need to create this function
  return posts.map((post) => ({
    category: post.data.categorySlug,
    componentSlug: post.data.slug,
  }));
}

const page = async ({ params }: { params: Params }) => {
  const data = await getComponentBySlug((await params).componentSlug);
  if (data == null) return notFound();
  const { frontmatter, content } = data;
  return <ComponentDetailPage frontmatter={frontmatter} myData={content} />;
};

export default page;
