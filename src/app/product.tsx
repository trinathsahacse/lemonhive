
import Image from 'next/image';

type productProps = {
  product: {
    _id:string,
    name: string,
    price:number,
    discount_end:Date,
    image:string
  },
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
  AddCart: (value: object) => void
}

const Product = (props: productProps)=> {
  const today = new Date();
  today.setHours(0,0,0,0);
  const CheckCart = (productId:string)=>{
    let check = props.carts.find((cart)=> cart.product_id === productId)
    let result = check ? true : false
    return result
  }

  
  return (
      <div className="card p-4 border border-gray-300">
          <a href="#!" className="p-1.5">
          {props.product.image && (<img src={props.product.image} className="product-img w-auto"
                alt={props.product.name}
                />)}
              
            </a>
          <p className="text-base mb-2 text-gray-600">{props.product.name}</p>
          {new Date(props.product.discount_end) >= today ?
            <p className="text-base mb-2 font-semibold text-gray-600">${props.product.price - ((props.product.price * 25) / 100)} <s className="text-sm mb-2 font-semibold text-gray-600">${props.product.price}</s></p>
           :
          <p className="text-base mb-2 font-semibold text-gray-600">${props.product.price}</p>
           }
           {CheckCart(props.product._id) === true ?
           <button className="product-btn text-green-500 w-full">Added</button>
           : 
          <button className="product-btn" onClick={()=>props.AddCart(props.product)}>Add to Cart</button>
           }
      </div>
  )
}
export default Product;