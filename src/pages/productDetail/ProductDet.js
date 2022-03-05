import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import './product.css'
import {useDispatch,useSelector} from 'react-redux'
import dummyImg from '../../static/img/logobons.svg'
import { selectedProduct,removeSelectedProduct } from '../../redux/actions/productsActions'


const ProductDet = () => {
  const product = useSelector((state)=>state.product)
  const{id,price,category,title,image,description}= product
  const prodId = useParams()
  const dispatch = useDispatch()
  console.log(product)
  const fetchProdDetail = async()=>{
    const response = await axios.get(`https://fakestoreapi.com/products/${prodId.productId}`)
    .catch(err=>console.log(err))
    dispatch(selectedProduct(response.data))
  }
  useEffect(()=>{
    if(prodId && prodId!=='')fetchProdDetail()
    return ()=>{dispatch(removeSelectedProduct())}
  },[prodId])

  return (
    <div className="container customproddet ">
      {Object.keys(product).length===0
      ? (<div className='row'>
            <div className="col-md-8 text-center mx-auto">
              <div className="spinner-border" style={{width: '5rem', height: '5rem'}} role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </div>)
      :(<div className="row  ">
          <div className="col-md-8 text-center mx-auto">
            <div className="card my-4" >
              <h5 className="card-header btncustom text-white">{title}</h5>
              <p className="card-text btncustom text-white my-3">#{category}</p>
              <div className="card-body">
                  <img src={image ? image : dummyImg} className="card-img imgdet" alt="..."></img>
                  <p className="card-text">{description}</p>
                  <p className="card-text btncustom text-white my-3 ">{price}€</p>              
                  <button className="btn btn-block btncustom text-white" id={id} >Add to cart! <i className="fa fa-cart-plus" aria-hidden="true"> </i></button>
              </div>
            </div>
          </div>
      </div>)}    
    </div>
  )
}

export default ProductDet
