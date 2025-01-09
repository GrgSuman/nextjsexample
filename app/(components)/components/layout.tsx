import CategoriesSection from "@/components/layouts/CategoriesListing";
import { getAllCategories } from "@/lib/mdx";

export default async function componentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getAllCategories();

  return (
    <>
      <div className="min-h-screen pt-16 px-[3%]">
        <div>{children}</div>
        </div>
    </>
  );
}
