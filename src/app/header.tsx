'use client';

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../../public/Vector.png'
import cart from '../../public/cart.png'
import Cart from './cart';

type headerProps = {
  carts: {
    quantity:number,
    subtotal:number,
    product:{
        name:string,
        image:string,
        price:number
    }
  }[],
}
const Header = ({carts}:headerProps) =>  {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cartMenuOpen, setCartMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center custom-nav justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 flex items-center">
              
              <img
                className="h-8 w-auto"
                src={logo.src}
                alt=""
              />
              <p className="custom-logo-title">E-Bazar</p>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#!" className="-m-1.5 p-1.5 border border-gray-300 flex items-center" onClick={()=>setCartMenuOpen(true)}>
              
              <img
                className="h-6 w-auto"
                src={cart.src}
                alt=""
              />
              <p className="ml-1 text-sm">Cart <span>({carts? carts.length : 0})</span></p>
            </a>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <img
                    className="h-8 w-auto"
                    src={logo.src}
                    alt=""
                />
                <p className="custom-logo-title">E-Bazar</p>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="py-6">
                <a href="#!" className="-m-1.5 p-1.5 border border-gray-300 flex items-center" onClick={()=>setCartMenuOpen(true)}>
              
              <img
                className="h-6 w-auto"
                src={cart.src}
                alt=""
              />
              <p className="ml-1 text-sm">Cart <span>({carts? carts.length : 0})</span></p>
            </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        {carts?
          <Cart cartMenuOpen={cartMenuOpen} carts={carts} setCartMenuOpen={setCartMenuOpen}></Cart>
        :''}
      </header>
    </div>
  )
}
export default Header;