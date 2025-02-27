import React ,{useState}from 'react';
import Base from '../core/Base';
import {Link} from "react-router-dom"
import {signup} from "../auth/helper/index"

const Signup =()=>{
const [values,setValues]=useState({
name : "",
email:"",
password:"",
error:"",
success:false

});
const{name,email,password,error,success}=values;
const handleChange = (name) =>(event)=>{
setValues({...values,error:false,[name]:event.target.value});
}
const onSubmit=(event)=>{
    event.preventDefault();
    setValues({...values,error:false})
    signup({name,email,password})
    .then((data) =>{
        console.log("DATA",data);
    })
    .catch(e=>console.log(e));
};
const signUpForm = ()=>{
    return (
        <div className="row">
            <div className="col-md-6 offset-sm-3 text-left">
                <form>
                    <div className="form-group">
                        <label  className="text-light">name</label>
                        <input className="form-control" onChange={handleChange("name")} value={name}type="text"/>

                        
                    </div>
                    <div className="form-group">
                        <label  className="text-light">email</label>
                        <input className="form-control" onChange={handleChange("email")} value={email} type="text"/>

                        
                    </div>
                    <div className="form-group">
                        <label  className="text-light">password</label>
                        <input className="form-control" onChange={handleChange("password")} value={password} type="password"/>

                        
                    </div>
                    <button onClick={onSubmit} className="btn btn-success btn-block">Submit</button>
                </form>
            </div>
            </div>
    )
}




  return (
   <Base title ="sign up page " description="a sign up user">
       {signUpForm()}
       <p className="text-white text-center">
           {JSON.stringify(values)}
       </p>
   </Base>
  );
};
export default Signup;