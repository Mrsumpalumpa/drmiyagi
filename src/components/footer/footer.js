import React from "react"
import logobons from '../../static/img/bonsai.svg'
import './footer.css'
import { Link } from "react-router-dom"

const Footer=()=>{
    return(
        <div className="row">
            <footer className="col-12 text-center customfooter">
                <p><img src={logobons} alt="..." width={50} height={50}></img><small>Dr. Miyagi (宮城博士) &reg;</small></p>
                <div className="iconcont">
                <Link className="footicon" to="http://www.facebook.com"><i className="fa fa-facebook-square" aria-hidden="true"></i></Link>
                <Link className="footicon" to=""><i className="fa fa-pinterest" aria-hidden="true"></i></Link> 
                <Link className="footicon" to=""><i className="fa fa-instagram" aria-hidden="true"></i></Link> 
                <Link className="footicon" to=""><i className="fa fa-twitter" aria-hidden="true"></i></Link>     
                </div>
            </footer>
        </div>
        
    )
}

export default Footer