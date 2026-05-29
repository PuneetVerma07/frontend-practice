import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <div className='w-full text-2xl h-20 px-10 bg-pink-400 flex items-center justify-between'>
          <h1 className=''>Puneet Verma</h1>
          <div className='flex gap-10'>
              <Link href={"/"}>Home</Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/product"}>Product</Link>
              <Link href={"/contact"}>Contact</Link>
          </div>
    </div>
  )
}

export default Navbar