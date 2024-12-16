import IndividualCards from "@/components/IndividualCards";
import { getAllCategories, getAllComponentsByCategory } from "@/lib/mdx";
import { notFound } from "next/navigation";

type Params = Promise<{ category: string }>

// Add this to generate static pages for each category
export async function generateStaticParams() {
  const categories = await getAllCategories(); // You'll need to create this function
  return categories.map((category) => ({
    category: category.categorySlug,
  }));
}


const ComponentsPage = async ({ params }:{params: Params}) => {
  const components = await getAllComponentsByCategory( (await params).category);
  if(components.length == 0) {
    return notFound()
  }
  return (
    <>
      {/* Content Header */}
      <div className=" bg-white border-b">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">{components[0].data.category}</h1>
              <p className="text-gray-600">
                {/* Beautiful and responsive hero sections for your landing pages */}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {components.map((component, index) => (
           <IndividualCards key={index} data={component.data} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ComponentsPage;
