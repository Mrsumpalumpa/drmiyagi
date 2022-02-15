import './contact.css'

const Contact = ()=>{
    return(
        <div className="row contactcustom d-flex flex-column">
            <h1  className="col-12 text-center">Contact</h1>
            <div className="col-md-6 mx-auto my-0 ">
                <form className="p-3">
                    <div className="form-row ">
                        <div className="form-group col-md-12 my-3">
                        <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="inputEmail">Email</label>
                            <input type="email" className="form-control" id="inputEmail"/>
                        </div>
                        <div className="form-group col-md-12 my-3">
                            <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="inputUser">User name</label>
                            <input type="text" className="form-control" id="inputUser"/>
                        </div>
                    </div>
                    <div className="form-row ">
                        <label className="d-block bg-dark text-white px-1 my-1 rounded" htmlFor="inputMessage">Message</label>
                        <textarea  className="form-control" id="inputMessage" placeholder="Send us a message..."/>
                    </div>
                    <div className="form-row d-flex justify-content-end ">
                    <button type="submit" className="btn btn-dark btn-block w-50 my-3"><i className="fa fa-paper-plane" aria-hidden="true"></i> Send </button>    
                    </div>  
                    
                </form>
            </div>
        </div>
       
       )
}

export default Contact