
import { Link } from "react-router-dom";
import './404.css'

const Err404 = ()=>{
    return(
        <div className="row">
            <div className="col-12 text-center custom404">
            <h1>Error 404: Page not found</h1>
            <p>Go back <Link className="text-bold" to="/">Home</Link></p>
            </div>
        </div>
       
       )
}

export default Err404