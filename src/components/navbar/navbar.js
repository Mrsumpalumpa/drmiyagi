import {React, useRef} from "react"
import logobons from '../../static/img/bonsai.svg'
import './navbar.css'
import { Link } from 'react-router-dom'


const Navbar = ({refCountNumber})=>{
    const cartNumber = useRef()
    return(
            <div className="container-fluid customnav">
                <nav className="navbar navbar-expand-lg row">
                    <div className="custombrand col-lg-4 col-md-8 mx-auto d-flex justify-content-center py-2 px-5 ">
                        <Link to ="/" className="navbar-brand " ><img alt="..." src={logobons} width={40} height={40} ></img><span clas="japosign"> 宮城博士</span></Link>
                        <Link to ="/dashboard" className="nav-link cartContainer"> <i className="fa fa-cart-plus cartLogo" aria-hidden="true"> </i><span ref={cartNumber} className="cartNumber">{refCountNumber}</span></Link>
                        <button className="navbar-toggler my-1 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon "></span>
                        </button>
                    </div>                   
                    <div className="collapse navbar-collapse col-lg-8 d-lg-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center">
                            <li className="nav-item px-md-1 my-sm-2 py-2 ">
                                <Link className="nav-link" to="/" ><i className="fa fa-home mx-2"></i>Home </Link>
                            </li>
                            <li className="nav-item px-md-2 my-sm-2 py-2">
                                <Link className="nav-link" to="/catalogue" ><i className="fa fa-camera-retro mx-2" aria-hidden="true"></i>Catalogue</Link>
                            </li>
                            <li className="nav-item px-md-2 my-sm-2 py-2">
                                <Link className="nav-link" tabIndex="-1" aria-disabled="true" to="/contact"><i className="fa fa-comment-o mx-2" aria-hidden="true"></i>Contact us</Link>
                            </li>
                            <li className="nav-item px-md-2 my-sm-2 py-2">
                                <Link className="nav-link" tabIndex="-1" aria-disabled="true" to ="/help"><i className="fa fa-info-circle mx-2" aria-hidden="true"></i>Help</Link>
                            </li>
                            <li className="nav-item px-md-2 my-sm-2 py-2">
                                <Link className="nav-link" tabIndex="-1" aria-disabled="true" to="/auth/login"><i className="fa fa-sign-in mx-2" aria-hidden="true"></i>Log In</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}

export default Navbar
    

