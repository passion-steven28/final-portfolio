import React from 'react'
import Link from 'next/link'

export const Navigation = () => {
  return (
    <div className='w-full flex items-center justify-between md:p-5 py-2'>
      <div className='text-3xl font-black underline'>
        Passion
      </div>
      <div>
        <Link href='#contact'>
        <button className='text-sm w-full md:text-2xl font-mono bg-black text-white p-2 px-3 rounded-full hover:shadow-lg active:scale-[0.9] transition-all ease-in-out '>say hello</button>
        </Link>
      </div>
    </div>
  )
}
