import React from 'react'
import Image from 'next/image'

const Author = ({ author }) => {
  console.log(author.name)
  return (
    <div className="bg-opacity-2 relative mt-20 mb-8 rounded-lg bg-blue-500 p-12 text-center shadow-lg">
      <div className="absolute left-0 right-0 -top-14">
        <Image
          unoptimized
          // loader={grpahCMSImageLoader}
          alt={author.name}
          height="100px"
          width="100px"
          className="rounded-full align-middle"
          src={author.photo.url}
        />
      </div>
      <h3 className="mt-4 mb-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-ls text-white">{author.bio}</p>
    </div>
  )
}

export default Author
