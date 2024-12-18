import IndividualCards from "@/components/IndividualCards";
import { getAllComponentsByCategory } from "@/lib/mdx";
import { notFound } from "next/navigation";

const ComponentsPage = async ({ params }) => {
  const components = await getAllComponentsByCategory((await params).category);
  if (components.length === 0) {
    return notFound();
  }

  return (
    <>
      <div className="bg-white border-b">
        <div className="px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">
                {components[0].data.category}
              </h1>
              <p className="text-gray-600">
                Explore our collection of {components[0].data.category.toLowerCase()} components
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
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