import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
      <div className='px-10 py-8'>
          <h1>Product page</h1>
          <div className='flex gap-10 underline'>
            <Link href={"/product/men"}>Men</Link>
            <Link href={"/product/women"}>women</Link>
            <Link href={"/product/kid"}>Kid</Link>
          </div>          
      </div>
      
  )
}

export default page