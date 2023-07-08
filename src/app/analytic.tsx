'use client';

import { useState } from 'react'
import product from '../../public/product.png'
import vendor from '../../public/vendor.png'
import unique from '../../public/unique.png'

export default function Analytic() {

  return (
    <div className="grid gap-5 grid-cols-3 mt-8">
        <div className="card p-8 custom-bg-color rounded-none">
        <a href="javascript:void(0)" className="card-box p-1.5 flex items-center">
              <img
                className="h-8 w-auto"
                src={product.src}
                alt=""
              />
            </a>
            <h6 className="card-total">Total Product : 06</h6>
            <p className="card-des"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima expedita eveniet! Recusandae odio quisquam quasi voluptatibus qui, animi voluptatem consequuntur delectus excepturi incidunt dolor, suscipit nobis deleniti, totam ipsa. </p>
        </div>
        <div className="card p-8 custom-bg-color rounded-none">
        <a href="javascript:void(0)" className="card-box p-1.5 flex items-center">
              <img
                className="h-8 w-auto"
                src={vendor.src}
                alt=""
              />
            </a>
        <h6 className="card-total">Total Product : 06</h6>
            <p className="card-des"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima expedita eveniet! Recusandae odio quisquam quasi voluptatibus qui, animi voluptatem consequuntur delectus excepturi incidunt dolor, suscipit nobis deleniti, totam ipsa. </p>
        </div>
        <div className="card p-8 custom-bg-color rounded-none">
        <a href="javascript:void(0)" className="card-box p-1.5 flex items-center">
              <img
                className="h-8 w-auto"
                src={unique.src}
                alt=""
              />
            </a>
        <h6 className="card-total">Total Product : 06</h6>
            <p className="card-des"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis minima expedita eveniet! Recusandae odio quisquam quasi voluptatibus qui, animi voluptatem consequuntur delectus excepturi incidunt dolor, suscipit nobis deleniti, totam ipsa. </p>
        </div>
    </div>
  )
}
