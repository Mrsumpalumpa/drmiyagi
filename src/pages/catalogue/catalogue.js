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

const Catalogue = ({setTotal})=>{
    
  const [productsArr,setProductArr]=useState([])
  
  useEffect(()=>{
     
    try{
        if(sessionStorage.getItem('Info')==null && sessionStorage.getItem('Token')==null ){
            alert('user not logged')    
            setProductArr([])
            
        }else if(sessionStorage.getItem('Info')!=null){
            const userInfo = JSON.parse(sessionStorage.getItem('Info'))
            const token = sessionStorage.getItem('Token')
            const headers = {'Authorization' : `Bearer ${token}`}         
            const fetchCsrf = async()=>{            
                    const response = await axios.get(`/api/products`,headers)
                    setProductArr(response.data)
                    const prodList =[] 
                    response.data.forEach(prod=>{
                        const order = new Order(prod.id,prod.name,prod.price)
                        prodList.push(order)  
                    })
                    localStorage.setItem(`cart${userInfo.id}`, JSON.stringify(prodList))
                    
                    console.log(prodList)
            }
            fetchCsrf()       
        }
       
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
                            <ProductCard id={prod.id} name={prod.name} imgUrl={prod.imgUrl} key={index} price={prod.price} setTotal={setTotal} ></ProductCard>
                            )
                    })
                    : <h1 className="text-center">No products available:<br></br> Log in to see our catalogue</h1>
                }
            </div>            
        </div>        
       )
}

export default Catalogue