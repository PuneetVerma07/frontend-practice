"use client";

import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const params = useParams()
    console.log(params)

  return (
      <div>
          <h2>Inside product page....</h2>
          <h3 className='upparcase mt-5'>{ params.productId } Collection</h3>
    </div>
  )
}

export default page