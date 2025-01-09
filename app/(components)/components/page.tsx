import IndividualCards from "@/components/IndividualCards";
import CategoriesSection from "@/components/layouts/CategoriesListing";
import { getAllPostsData, getAllCategories } from "@/lib/mdx";

const ComponentsPage = async () => {
  const components = await getAllPostsData();
  const categories = await getAllCategories();
  return (
    <>
      <CategoriesSection categories={categories} />

      {/* Components Grid */}
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
            <IndividualCards key={index} data={component.data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
