'use client';

import { useState } from 'react'
import Product from './product';

export default function Products() {

  return (
    <div className="grid gap-4 grid-cols-4 mt-8">
        <Product></Product>        
    </div>
  )
}
