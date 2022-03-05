import React from 'react'
import dummyImg from '../../static/img/logobons.svg'
import {useSelector} from 'react-redux'
import './productCard.css'
import {Link} from 'react-router-dom'

/*if(cartProd.id == f.target.id){
  cartProd.quantity+=1
  localStorage.setItem('DrMiyagiCart',JSON.stringify(cartProdArr))
  
}*/
const ProductCard=(/*{id,name='Bonsai',price=100,imgUrl,setTotal}*/{setTotal})=> {

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
  const products = useSelector(state=>state.allProducts.products)
  const renderList = products.map((prod)=>{
    const{id,price,category,title,image}= prod
    return (
      <div key={id} className="col-md-4 col-sm-12 ">
        <Link to ={`/product/${id}`} className='prodlink'>
          <div className="card my-4" >
            <h5 className="card-header btncustom text-white">{title}</h5>
            <p className="card-text btncustom text-white my-3">#{category}</p>
            <div className="card-body">
                <img src={image ? image : dummyImg} className="card-img" alt="..."></img>
                <p className="card-text btncustom text-white my-3 ">{price}€</p>              
                <button className="btn btn-block btncustom text-white" id={id} onClick={buy}>Add to cart! <i className="fa fa-cart-plus" aria-hidden="true"> </i></button>
            </div>
          </div>
        </Link>
        </div> );
  })
  //const {id, title} =products
  
  /**/
  return (
    <div className='row'>
      
        {renderList}
      
    </div>
   
    
      
    
  )
}


export default ProductCard
