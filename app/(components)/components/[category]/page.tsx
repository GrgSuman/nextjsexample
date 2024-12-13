import IndividualCards from "@/components/IndividualCards";
import { getAllComponentsByCategory } from "@/lib/mdx";
import Link from "next/link";
import { notFound } from "next/navigation";

const ComponentsPage = async ({ params }) => {
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
