import Link from "next/link";
import React from "react";

const IndividualCards = ({data}) => {
  return (
    <Link href={`/components/${data.categorySlug}/${data.slug}`}>
    <div className="group bg-white rounded-2xl border hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <div className="aspect-[16/10] overflow-hidden bg-gray-50">
          <img
            src={
              "https://ui.aceternity.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1593508512255-86ab42a8e620%3Fq%3D80%26w%3D3556%26auto%3Dformat%26fit%3Dcrop%26ixlib%3Drb-4.0.3%26ixid%3DM3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%253D%253D&w=1920&q=75"
            }
            alt={data.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold mb-2">
          {data.title}
        </h3>
        {/* <p className="text-gray-600 text-base mb-6">
          {data.description}
        </p> */}
      </div>
    </div>
  </Link>
  );
};

export default IndividualCards;
