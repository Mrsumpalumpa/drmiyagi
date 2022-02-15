import { useState } from 'react'
import './login.css'

import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'

const Login = ()=>{
    let navigate = useNavigate();
    
    const [loginInput,setLoginInput]=useState({
        email:'',
        password:'',
    });
    
    const handleInput=(e)=>{
        e.persist();
        setLoginInput({...loginInput,[e.target.name]: e.target.value})
        console.log(loginInput)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        const data= {
            email: loginInput.email,
            password: loginInput.password,

        }
            try{axios.get('/sanctum/csrf-cookie').then(response=>{
                axios.post(`/api/login`, data).then(res=>{
                    alert(`${res.data.user.name} logged in!`)
                    sessionStorage.setItem(`Info`,JSON.stringify(res.data.user))
                    sessionStorage.setItem(`Token`,JSON.stringify(res.data.token))
                    navigate('/')   
                    })
                })
             
            }
            catch(err){
                alert(err)
            }
        
        
        
        
        
    }
    return(
        <div className="row d-flex flex-column mb-3">
            <div className="col-12 text-center customlogin ">
                <h1>Login</h1>
                <p>or <Link to ='/auth/signup'>Sign Up</Link></p>
            </div>
            <div className="col-md-6 mx-auto py-3">
                <form className="p-3" method="POST" onSubmit={handleSubmit} >
                        <div className="form-group">
                            <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="InputEmail1">Email</label>
                            <input
                                name='email'
                                className="form-control"
                                aria-describedby="emailHelp"
                                id="InputEmail1" 
                                type="text" 
                                value={loginInput.email}
                                onChange={handleInput}
                                />                       
                        </div>
                        <div className="form-group">
                            <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="InputPassword1">Password</label>
                            <input
                            name='password'
                            className="form-control"
                            id="InputPassword1"
                            type="password" 
                            value={loginInput.password}
                            onChange={handleInput}
                            />
                        </div>
                        
                        <div className="form-group d-flex justify-content-end">
                            <button type="submit" className="btn btn-dark w-50 my-4"> <i className="fa fa-sign-in" aria-hidden="true"></i>  Sign In</button>
                        </div>
                    
                    </form>    

            
            </div>
        </div>
       
       )
}

export default Login