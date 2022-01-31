import './signup.css'
import { Link } from "react-router-dom";
const SignUp = ()=>{
    return(
        <div className="row d-flex flex-column mb-3">
            <div className="col-12 text-center customlogin ">
                <h1>Signup</h1>
                <p>Already got an account? go <Link to ='/auth/login'>Log in</Link></p>
            </div>
            <div className="col-md-6 mx-auto py-3">
                <form className="p-3">
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="fullName">Full name</label>
                    <input type="text" className="form-control" id="fullName" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="userAlias">User alias</label>
                    <input type="text" className="form-control" id="userAlias" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="inputPassword1">Password</label>
                    <input type="password" className="form-control" id="inputPassword1"/>
                </div>
                <div className="form-group">
                    <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="confInputPassword2">Confirm password</label>
                    <input type="password" className="form-control" id="confInputPassword2"/>
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