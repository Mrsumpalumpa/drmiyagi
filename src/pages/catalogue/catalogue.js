import React,{useEffect,useState} from "react";
import './catalogue.css'
import ProductCard from "../../components/productCard/productCard";
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {setProducts} from '../../redux/actions/productsActions'

class Order{
    constructor(id,name,price,quantity=0){
      this.id=id
      this.name=name
      this.price=price
      this.quantity=quantity
    }
}

const Catalogue = ({setTotal})=>{
  const products = useSelector((state) => state.allProducts.products)
  const dispatch = useDispatch()
  
  /*products from fakeAPI using redux*/
  const fetchAllProd = async()=>{
    const response = await axios
    .get('https://fakestoreapi.com/products')
    
    .catch((err)=>{console.log(err)
    })
    dispatch(setProducts(response.data))
  }

  useEffect(()=>{fetchAllProd()},[])
  
  /*  PRODUCTS FROM LARAVEL API using localstorage without redux
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
  },[]);*/

/*JSX CUT
                {productsArr.length>0
                    ? productsArr.map((prod,index)=>{
                        return(
                            <ProductCard id={prod.id} name={prod.name} imgUrl={prod.imgUrl} key={index} price={prod.price} setTotal={setTotal} ></ProductCard>
                            )
                    })
                    : <h1 className="text-center">No products available:<br></br> Log in to see our catalogue</h1>
                }               
  
  */
  
  

    return(
        <div className="container customcatalogue ">
            <div className="row  ">
                <div className="col-12 text-center ">
                    <h1 >Catalogue</h1>
                    {Object.keys(products).length===0
                    ?( <div className='row'>
                            <div className="col-md-8 text-center mx-auto">
                                <div className="spinner-border" style={{width: '5rem', height: '5rem', marginTop:'100px'}} role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        </div>)
                    :(<ProductCard setTotal={setTotal}></ProductCard>)}
                </div>
                
            </div>            
        </div>        
       )
}

export default Catalogue