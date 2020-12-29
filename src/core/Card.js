import React from 'react';
import ImageHelper from './helper/imagehelper';
import {Redirect} from "react-router-dom"
import { addItemToCart ,removeItemFromCart } from './helper/carthelper';


var isAuthenticated=true

const Card = ({product,addtoCart=true,removeFromCart=true}) => {
    var cartTitle=''
    var cartPrice=''
   var cartDescription=''
    if(product.name==null)
    cartTitle="item"
    else cartTitle=product.name
    if(product.name==null)
    cartTitle="100"
    else cartPrice=product.price
    if(product.description==null)
    cartDescription="best selling item "
    else cartDescription=product.description

    const addToCart = () =>{
if(isAuthenticated){
  addItemToCart(product,()=>{})
    console.log("added to cart")
}else{
    console.log("login first !!")
}
const getAredirect = redirect =>{
    if (redirect){
        return <Redirect to='/cart'/>
    }
}
    }
const showAddToCart=addToCart=>{
return(
addToCart && ( <button
    onClick={addToCart}
    className="btn btn-block btn-outline-success mt-2 mb-2"
  >
    Add to Cart
  </button>)

)
}
const showRemoveFromCart=removeFromCart=>{
return(
    removeFromCart &&(
        <button
        onClick={()=>{
          removeItemFromCart(product._id)
            console.log('product remove !!');
        }}
        className="btn btn-block btn-outline-danger mt-2 mb-2"
      >
        Remove from cart
      </button>
    )
)
}

    
    return (
      <div className="card text-white bg-dark border border-info ">
        <div className="card-header lead">{cartTitle}</div>
        <div className="card-body">
         <ImageHelper product={product}/>
          <p className="lead bg-success font-weight-normal text-wrap">
            {cartDescription}
          </p>
          <p className="btn btn-success rounded  btn-sm px-4">$  {cartPrice}</p>
          <div className="row">
            <div className="col-12">
             {showAddToCart(addToCart)}
            </div>
            <div className="col-12">
             {showRemoveFromCart(removeFromCart)}
            </div>
          </div>
        </div>
      </div>
    );
  };
export default Card;