'use client';

import { useState } from 'react'
import Product from './product';
import { Cart } from '@/api/cart/request';

type ProductsProps = {
  products: {
    _id:string,
    name: string,
    price:number,
    discount_end: Date,
    image:string
  }[],
  carts: {
    quantity:number,
    subtotal:number,
    product_id:string,
    product:{
        name:string,
        image:string,
        price:number
    }
  }[],
  getAllCarts: ()=> void
}



const Products = (props:ProductsProps) => {
    const AddCart = async(product:any)=>{
      let data = {
        product_id: product.id,
        quantity: 1,
        price:product.price,
        subtotal:product.price
      }
      let cart = await new Cart().addCart(data);
      props.getAllCarts();
    }

  return (
    <div className="grid gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8">
      {props.products?.map((product,index)=>(
          <Product carts={props.carts} product={product} AddCart={AddCart} />        
      ))}
    </div>
  )
}
export default Products;