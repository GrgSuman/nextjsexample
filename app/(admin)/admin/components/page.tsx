import UploadComponentForm from '@/components/forms/UploadComponentForm'
import { getAllCategories } from '@/lib/mdx'
import React from 'react'

const page = async() => {
  const allComponentCategories = await getAllCategories()
  return (
    <UploadComponentForm allCategories = {allComponentCategories}/>
  )
}

export default page