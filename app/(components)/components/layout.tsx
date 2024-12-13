import SideNav from "@/components/layouts/SideNav";
import { getAllCategories } from "@/lib/mdx";

export default async function componentsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 
  const categories = await getAllCategories()

  return (
    <>
      <div className="min-h-screen bg-gray-50/50 pt-16 px-[3%]">
      {/* Refined Sidebar */}
      <SideNav categories = {categories}/>
        {/* Main Content */}
        <div className="ml-72">
            {children}
        </div>
      </div>
    </>
  );
}
