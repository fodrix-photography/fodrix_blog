import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { getCategories } from '../services'

const Caterogies = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b-2 pb-4 text-xl font-semibold text-blue-500">
        Categories
      </h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`}>
          <span className="mb-3 flex h-10 cursor-pointer items-center border-b pl-3 transition duration-300 hover:text-blue-500">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Caterogies
