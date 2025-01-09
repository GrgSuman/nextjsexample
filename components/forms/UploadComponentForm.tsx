"use client";
import React, { useState } from "react";
import { Code, ArrowLeft, Eye, Plus } from "lucide-react";
import matter from "gray-matter";
import { saveComponent } from "@/lib/saveComponentToMarkdown";
import slugGenerator from "@/lib/slugGenerator";
import { useRouter } from "next/navigation";

const UploadComponentForm = ({ allCategories }) => {
  const [previewMode, setPreviewMode] = useState(false);
  const [isAddingCategory, setIsAddingCategory] = useState(allCategories.length === 0 ? true : false);
  const [newCategory, setNewCategory] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    componentName: "",
    category: "",
    thumbnailUrl: "",
    jsxCode: "",
    usage: "",
    lastUpdated: new Date(),
  });

  const router = useRouter();

  const [categories, setCategories] = useState(allCategories);

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory != null) {
      setCategories([...categories, { category: newCategory, slug: slugGenerator(newCategory) }]);
      setFormData({ ...formData, category: newCategory });
      setNewCategory("");
      setIsAddingCategory(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const frontmatterData = {
      title: formData.title,
      slug: slugGenerator(formData.title),
      description: formData.description,
      category: formData.category,
      componentName: formData.componentName,
      categorySlug: slugGenerator(formData.category),
      thumbnailUrl: "",
      lastUpdated: new Date(formData.lastUpdated).toISOString().split("T")[0],
      usage: formData.usage,
    };
    const fileContent = matter.stringify(formData.jsxCode, frontmatterData);
    const res = await saveComponent(fileContent, frontmatterData.slug, formData.componentName,formData.jsxCode);
    console.log(res)
    if(res.success) {
      router.push("/components")
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50/50 pb-12">
      {/* Header */}
      <div className="bg-white">
        <div className="max-w-3xl mx-auto px-6 py-6">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>
          <h1 className="text-2xl font-bold">Upload Component</h1>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto px-6">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info Section */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-lg font-semibold mb-6">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Component Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder="e.g., Gradient Hero Section"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Component Name
                </label>
                <input
                  type="text"
                  required
                  value={formData.componentName}
                  onChange={(e) =>
                    setFormData({ ...formData, componentName: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                  placeholder="e.g. GradientHeroSection"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Description
                </label>
                <textarea
                  required
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 h-24"
                  placeholder="Describe your component..."
                />
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Category
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.category}
                      onChange={(e) => {
                        if (e.target.value === "add-new") {
                          setIsAddingCategory(true);
                        } else {
                          setFormData({ ...formData, category: e.target.value });
                        }
                      }}
                      className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    >
                      {categories.map((category) => (
                        <option key={category.category} value={category.category}>
                          {category.category}
                        </option>
                      ))}
                      <option value="add-new">+ Add New Category</option>
                    </select>
                  </div>
                </div>

                {isAddingCategory && (
                  <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Category Name
                      </label>
                      <input
                        type="text"
                        value={newCategory}
                        onChange={(e) =>
                          setNewCategory(e.target.value)
                        }
                        className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                        placeholder="Enter category name"
                      />
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={handleAddCategory}
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 flex items-center gap-2"
                      >
                        <Plus className="h-4 w-4" />
                        Add Category
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setIsAddingCategory(false);
                          setNewCategory("");
                          setFormData({ ...formData, category: categories[0].category });
                        }}
                        className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* <div>
                <label className="block text-sm font-medium mb-2">
                  Thumbnail URL
                </label>
                <div className="flex gap-4">
                  <input
                    required
                    type="text"
                    value={formData.thumbnailUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, thumbnailUrl: e.target.value })
                    }
                    className="flex-1 px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                    placeholder="Enter image URL"
                  />
                </div>
              </div> */}
            </div>
          </div>

          {/* Code Section */}
          <div className="bg-white rounded-xl border p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">Component Code</h2>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPreviewMode(!previewMode)}
                  className="flex items-center gap-2 px-3 py-1.5 text-sm border rounded-lg hover:bg-gray-50"
                >
                  {previewMode ? (
                    <>
                      <Code className="h-4 w-4" />
                      Edit Code
                    </>
                  ) : (
                    <>
                      <Eye className="h-4 w-4" />
                      Preview
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  JSX Code
                </label>
                <textarea
                  required
                  value={formData.jsxCode}
                  onChange={(e) =>
                    setFormData({ ...formData, jsxCode: e.target.value })
                  }
                  className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 h-64 font-mono"
                  placeholder="Paste your JSX code here..."
                />
              </div>
            </div>
          </div>

          {/* Usage Section */}
          <div className="bg-white rounded-xl border p-6">
            <h2 className="text-lg font-semibold mb-6">Usage Instructions</h2>
            <textarea
              required
              value={formData.usage}
              onChange={(e) =>
                setFormData({ ...formData, usage: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 h-40"
              placeholder="Provide usage instructions, customization details, and any additional information..."
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
            >
              Upload Component
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadComponentForm;