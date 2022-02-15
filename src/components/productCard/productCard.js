import React from 'react'
import dummyImg from '../../static/img/logobons.svg'



/*if(cartProd.id == f.target.id){
  cartProd.quantity+=1
  localStorage.setItem('DrMiyagiCart',JSON.stringify(cartProdArr))
  
}*/
const ProductCard=({id,name='Bonsai',price=100,imgUrl,setTotal})=> {
  const userInfo = JSON.parse(sessionStorage.getItem('Info'))
  const buy= (f)=>{
    try{
      setTotal((e)=>e+1)
      const cartArr= JSON.parse(localStorage.getItem(`cart${JSON.stringify(userInfo.id)}`))
      cartArr.forEach(prod=>{
        if(Number(f.target.id) === prod.id){
          prod.quantity = prod.quantity + 1
        }
      })
      localStorage.setItem(`cart${JSON.stringify(userInfo.id)}`,JSON.stringify(cartArr))
    }catch(err){console.error(err)} 
    
  }
  return (
    <div className="col-md-4 col-sm-12  ">
      <div className="card my-2" >
        <h5 className="card-header btncustom text-white">{name}</h5>
          <div className="card-body">
              <img src={dummyImg} className="card-img" alt="..."></img>
              <p className="card-text">{price}€</p>
              <button className="btn btn-block btncustom text-white" id={id} onClick={buy}>Add to cart! <i className="fa fa-cart-plus" aria-hidden="true"> </i></button>
          </div>
        </div>
    </div>
  )
}


export default ProductCard
