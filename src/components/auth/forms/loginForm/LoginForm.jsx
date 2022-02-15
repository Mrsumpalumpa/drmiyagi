import React, { useState } from "react";
import axios from "axios";




const LoginForm =()=>{
    const url= 'http://localhost:8000/api/login';
    const [email,setEmail]= useState('')
    const [password,setPassword]=useState('')
    const [responseAPI, setResponseAPI] = useState({ response: 'KO' });
    const handleSubmit =(event)=>{
        event.preventDefault()   
        alert( `Email: ${email} Pass:${password}`)
        
        
    }
    return(
        <form className="p-3" method="POST" onSubmit={handleSubmit} >
                    <div className="form-group">
                        <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="InputEmail1">Email</label>
                        <input
                            className="form-control"
                            aria-describedby="emailHelp"
                            id="InputEmail1" 
                            type="text" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />                       
                    </div>
                    <div className="form-group">
                        <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="InputPassword1">Password</label>
                        <input
                        className="form-control"
                        id="InputPassword1"
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    
                    <div className="form-group d-flex justify-content-end">
                        <button type="submit" className="btn btn-dark w-50 my-4"> <i className="fa fa-sign-in" aria-hidden="true"></i>  Sign In</button>
                    </div>
                
                </form>
    
    )}
export default LoginForm  