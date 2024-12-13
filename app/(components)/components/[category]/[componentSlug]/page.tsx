import ComponentDetailPage from '@/components/pages/ComponentDetailPage'
import { getComponentBySlug } from '@/lib/mdx'
import { notFound } from 'next/navigation'
import React from 'react'

const page = async ({ params }) => {
  const data = await getComponentBySlug((await params).componentSlug)
  if(data == null) return notFound()
  const { frontmatter, content } = data
  return (
    <ComponentDetailPage frontmatter={frontmatter} myData={content}/>
  )
}

export default page