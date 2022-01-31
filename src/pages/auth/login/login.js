import './login.css'
import { Link } from 'react-router-dom'

const Login = ()=>{
    return(
        <div className="row d-flex flex-column mb-3">
            <div className="col-12 text-center customlogin ">
                <h1>Login</h1>
                <p>or <Link to ='/auth/signup'>Sign Up</Link></p>
            </div>
            <div className="col-md-6 mx-auto py-3">
                <form className="p-3">
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    
                </div>
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
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