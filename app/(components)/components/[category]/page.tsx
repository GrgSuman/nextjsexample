import IndividualCards from "@/components/IndividualCards";
import CategoriesSection from "@/components/layouts/CategoriesListing";
import { getAllCategories, getAllComponentsByCategory } from "@/lib/mdx";
import { notFound } from "next/navigation";


// Add this to generate static pages for each category
export async function generateStaticParams() {
  const categories = await getAllCategories(); // You'll need to create this function
  return categories.map((category) => ({
    category: category.categorySlug,
  }));
}

const ComponentsPage = async ({ params }) => {
  const components = await getAllComponentsByCategory((await params).category);
  if (components.length === 0) {
    return notFound();
  }

  const categories = await getAllCategories();

  return (
    <>
      <CategoriesSection categories={categories} />

      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
          {components.map((component, index) => (
            <IndividualCards key={index} data={component.data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
