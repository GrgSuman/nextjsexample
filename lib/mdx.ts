// lib/mdx.ts
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const componentsDirectory = path.join(process.cwd(), 'posts/components')

export function getAllPostsData() {
  const fileNames = fs.readdirSync(componentsDirectory)
  const allPostsData = fileNames.map((fileName) => {
    const fullPath = path.join(componentsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return {
      data: matterResult.data,
      content: matterResult.content,
    }
  })
  return allPostsData
}


export function getAllCategories() {
  const posts = getAllPostsData();
  
  // Create a Map using categorySlug as the key to ensure uniqueness
  const categoryMap = new Map();
  
  posts.forEach((post) => {
    const categorySlug = post.data.categorySlug;
    if (!categoryMap.has(categorySlug)) {
      categoryMap.set(categorySlug, {
        category: post.data.category,
        categorySlug: post.data.categorySlug
      });
    }
  });

  // Convert Map values to array
  return Array.from(categoryMap.values());
}

export async function getAllComponentsByCategory(category: string) {
  const posts = getAllPostsData()
  const filterPosts = posts?.filter((post) => category == post.data.categorySlug)
  return filterPosts
}

export async function getComponentBySlug(slug: string) {
  const fullPath = path.join(componentsDirectory, `${slug}.md`)
  try{
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    const { data, content } = matter(fileContents)
  
    return {
      frontmatter: data,
      content
    }
  }
  catch(e){
    return null
  }

}


