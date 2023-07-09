'use client';

import Image from 'next/image'
import Header from './header'
import Analytic from './analytic'
import Products from './products'
import AddProduct from './add-product'
import search from '../../public/search.png'
import plus from '../../public/plus 1.png'
import { useEffect, useState } from 'react';
import { Cart } from '@/api/cart/request';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsAsync, selectProducts } from '@/reduxSlices/accsessProductSlice';
import Pagination from './pagination';

export default function Home() {
  const [open, setOpen] = useState(false)
  const [carts, setCarts] = useState([])
  let dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page:number) => {
    setCurrentPage(page);
  };
  const getAllCarts = async () => {
    let carts = await new Cart().getCarts();
    setCarts(carts);
  };
  const products: {
    _id:string,
    name: string,
    price:number,
    discount_end: Date,
    image:string
  }[] = useSelector(selectProducts);
  const getAllProducts = async () => {
    dispatch(getProductsAsync())
  };
  
  console.log("products data", products)
  
  useEffect(() => {
    getAllCarts();
    getAllProducts();
  }, []);
  return (
    <main className="min-h-screen flex-col items-center justify-between lg:p-24 md:p-24 p-4 mt-9 lg:mt-0 sm:pt-5 sm:p-12">
        <Header carts={carts}></Header>      
        <Analytic></Analytic>
        <div className="flex w-full my-5 justify-between">
            <div className="w-full relative pr-3">
                <input className="w-full search border border-gray-100" name="search" placeholder="search product by name" />
                <img src={search.src} className="mr-1 search-icon" />
            </div>
            <div className="w-60">
              <button onClick={()=>setOpen(!open)} className="add-product w-full flex justify-center"><span><img src={plus.src} className="mr-1" /></span>Add Product</button>
            </div>
        </div>
        <Products getAllCarts={getAllCarts} products={products} carts={carts}></Products>
        <AddProduct open={open} setOpen={setOpen} getAllProducts={getAllProducts}></AddProduct>
        <Pagination
          items={products.length}
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={onPageChange}
        />
    </main>
  )
}
