import React,{useEffect,useState} from "react";
import './catalogue.css'
import ProductCard from "../../components/productCard/productCard";
import axios from 'axios'

class Order{
    constructor(id,name,price,quantity=0){
      this.id=id
      this.name=name
      this.price=price
      this.quantity=quantity
    }
}

//Esto seria la respuesta de la peticion fetch() deberia ir dentro del useEffect()
const products = [{"id":0,"name":"Bonsai Pino","price":120,"imgUrl":"https://www.rgbstock.com/download/micromoth/pWmLtN2.jpg"},{"id":1,"name":"Bonsai Manzano","price":80},{"id":2,"name":"Bonsai Castaño","price":100},{"id":3,"name":"Bonsai Ciprés","price":80},{"id":4,"name":"Bonsai Granado","price":70},{"id":5,"name":"Bonsai Naranjo","price":94},{"id":6,"name":"Bonsai Olmo","price":78},{"id":7,"name":"Bonsai Arce","price":120},{"id":8,"name":"Bonsai Sumpalumpa","price":120}]

const Catalogue = ({setTotal,setCartArray})=>{
    
    const [productsArr,setProductArr]=useState([])
  
  useEffect(()=>{
    try{
        const token = sessionStorage.getItem('Token')
        const userInfo = JSON.parse(sessionStorage.getItem('Info'))
        const headers = {'Authorization' : `Bearer ${token}`}
        const fetchCsrf = async()=>{            
                 const response = await axios.get(`/api/products`,headers)
                 setProductArr(response.data)
                 const prodList =[] 
                 response.data.forEach(prod=>{
                     const order = new Order(prod.id,prod.name,prod.price)
                     prodList.push(order)
                     
                 })
                 localStorage.getItem(`cart${userInfo.id}`)? console.log('cart already created') :localStorage.setItem(`cart${userInfo.id}`, JSON.stringify(prodList))
                 
                 console.log(prodList)
        }
        
        fetchCsrf()
        
     
    }
    catch(err){
        alert(err)
    }
  },[]);
  
  

    return(
        <div className="container customcatalogue ">
            <div className="row  ">
                <div className="col-12 text-center ">
                    <h1 >Catalogue</h1>
                </div>
                {productsArr.length>0
                    ? productsArr.map((prod,index)=>{
                        return(
                            <ProductCard id={prod.id} name={prod.name} imgUrl={prod.imgUrl} key={index} price={prod.price} setTotal={setTotal} setCartArray={setCartArray}></ProductCard>
                            )
                    })
                    : <h1>No products available</h1>
                }
            </div>            
        </div>        
       )
}

export default Catalogue