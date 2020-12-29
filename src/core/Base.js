import React from 'react';

const Base=({title="my title",description="my descriprtion",className="bg-dark text-white p-4",children})=>{


  return (
   <div>
       <div className="container-fluid">
            <div className="jumbotron bg-dark text-white text-center">
                <h2 className="display-4">{title}</h2>
                <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
       </div>
       <footer className="footer bg-dark mt-auto py-3">
           <div className="container-fluid bg-success text-white text-center py-3">
               <h4>  for any problem contact us </h4>

               <button className="btn btn-warning btn-lg ">contact us</button>
               <div className="container">
                   <span className="text-warning">
                       hy hy hy 
                   </span>
               </div>
           </div>
       </footer>
   </div>
  );
}
export default Base;