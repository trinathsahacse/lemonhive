'use client';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

type cartProps = {
    cartMenuOpen: boolean,
    carts: {
        quantity:number,
        subtotal:number,
        product:{
            name:string,
            image:string,
            price:number
        }
    }[],
    setCartMenuOpen: (value: boolean) => void
}

const Cart = ({cartMenuOpen, carts, setCartMenuOpen}: cartProps)=>{
    return(
        <Dialog as="div" className="" open={cartMenuOpen} onClose={setCartMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                
                <h4 className="custom-logo-title">Shopping Cart</h4>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setCartMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 relative h-[calc(100%-4rem)] flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                  {carts?.map((cart)=>(
                    <div className="grid grid-cols-8 gap-2 items-center mb-4">
                        <div className="col-span-2">
                            {cart.product ? 
                            <img src={cart.product.image} className="product-img w-auto"
                                alt={cart.product.name}
                                />    
                            : ''}
                        </div>
                        <div className="col-span-5">
                            <p>{cart.product?cart.product.name: ''}</p>
                            <p className="text-gray-500 text-sm mt-2">Qty: {cart.quantity}</p>
                        </div>
                        <div className="col-span-1 cart-subtotal">
                            <p className="text-gray-500 text-sm font-semibold">${cart.subtotal}</p>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute cart-total w-lg flex justify-between">
                    <p className="text-base text-gray-500">SubTotal</p>
                    <p className="text-base font-semibold text-black-500">${carts?carts.reduce((prev,curr)=> prev + curr.subtotal,0): 0}</p>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
    )
}
export default Cart;