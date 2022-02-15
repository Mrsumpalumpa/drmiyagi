import './login.css'
import Loginform from '../../../components/auth/forms/loginForm/LoginForm'
import { Link } from 'react-router-dom'

const Login = ()=>{
    
    return(
        <div className="row d-flex flex-column mb-3">
            <div className="col-12 text-center customlogin ">
                <h1>Login</h1>
                <p>or <Link to ='/auth/signup'>Sign Up</Link></p>
            </div>
            <div className="col-md-6 mx-auto py-3">
                

            <Loginform></Loginform>
            </div>
        </div>
       
       )
}

export default Login