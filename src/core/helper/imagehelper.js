import React from 'react';

 const ImageHelper=({product})=> {
   var imageurl=''
if(product.image==null)
     imageurl ='https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3034&q=80'
     else imageurl=product.image
  return (
   <div className="rounded border border-success p-2">
       <img src={imageurl}
       style={{ macHight:"100%",maxWidth:"100%"}}
        className="mb-3 rounded"
       
       
       />

   </div>
  );
}
export default ImageHelper;