import React,{useEffect} from "react";
import './catalogue.css'
import ProductCard from "../../components/productCard/productCard";


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
    useEffect(()=>{                
        try{
            if(sessionStorage.getItem('DrMiyagiProdList')==null){
                sessionStorage.setItem('DrMiyagiProdList',JSON.stringify(products))
            }else{
                console.log('Product list already created') 
            }
            const prodArr = JSON.parse(sessionStorage.getItem('DrMiyagiProdList'))
            let cartProdArr=[]
            if(localStorage.getItem('Cart')==null){
                prodArr.forEach(prod=>{  
                    let cartProd = new Order(prod.id,prod.name,prod.price)
                    cartProdArr.push(cartProd)           
                })
                localStorage.setItem('Cart',JSON.stringify(cartProdArr))   
            }else{
                console.log('Cart already created')
            }      
        }
        catch(err){
            console.error(err)
      }
    },[])

    return(
        <div className="container customcatalogue ">
            <div className="row  ">
                <div className="col-12 text-center ">
                    <h1 >Catalogue</h1>
                </div>
                {products.map((prod,index)=>{
                    return(
                        <ProductCard id={prod.id} name={prod.name} imgUrl={prod.imgUrl} key={index} price={prod.price} setTotal={setTotal} setCartArray={setCartArray}></ProductCard>
                         )
                })}
            </div>            
        </div>        
       )
}

export default Catalogue