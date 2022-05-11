import React, { useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { getCategories } from '../services'

const Header = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="l container mx-auto mb-8 px-10">
      <div className="g:sticky container relative flex w-full flex-col items-center justify-center border-b border-blue-400 pt-8 pb-2">
        <div className="mx-auto block">
          <Link href="/">
            <Image
              src="/../public/fodrixiconnew.png"
              alt="fodrix logo"
              width={160}
              height={80}
            />
          </Link>
        </div>
        <div className="container mx-auto flex hidden h-full justify-center border border-blue-400 bg-blue-500 md:contents">
          <div>
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="ml-4 mt-2 cursor-pointer align-middle font-semibold transition duration-300 hover:text-blue-500 md:float-right">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
