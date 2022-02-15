import React,{useState} from 'react';
import './signup.css'
import { Link } from "react-router-dom";
import axios from 'axios';




const SignUp = ()=>{
    const [registerInput,setRegisterInput]=useState({
        name:'',
        email:'',
        password:'',
    });
    const handleInput=(e)=>{
        e.persist();
        setRegisterInput({...registerInput,[e.target.name]: e.target.value})
        console.log(registerInput)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data= {
            name: registerInput.name,
            email: registerInput.email,
            password: registerInput.password,
            password_confirmation :registerInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response=>{
            axios.post(`/api/register`, data).then(res=>{
                console.log(res)
                sessionStorage.setItem(`Info${res.data.user.email}`,JSON.stringify(res.data.user))
                sessionStorage.setItem(`Token${res.data.user.email}`,JSON.stringify(res.data.token))
            })
        })
        
        
        
    }

    return(
        <div className="row d-flex flex-column mb-3">
            <div className="col-12 text-center customlogin ">
                <h1>Signup</h1>
                <p>Already got an account? go <Link to ='/auth/login'>Log in</Link></p>
            </div>
            <div className="col-md-6 mx-auto py-3">
                <form className="p-3" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="fullName">Full name</label>
                    <input type="text" name='name' onChange={handleInput} value={registerInput.name} className="form-control"  id="fullName" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="inputEmail1">Email</label>
                    <input type="email" name='email' onChange={handleInput} value={registerInput.email} className="form-control" id="inputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="inputPassword1">Password</label>
                    <input type="password" name='password' onChange={handleInput} value={registerInput.password}  className="form-control" id="inputPassword1"/>
                </div>
                
                <div className="form-group d-flex justify-content-end">
                    <button type="submit" className="btn btn-dark w-50 my-4"> <i className="fa fa-sign-in" aria-hidden="true"></i>  Register</button>
                </div>
                
                </form>
            </div>
        </div>
       
       )
}

export default SignUp