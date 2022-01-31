import './dashboard.css'
import { Link } from 'react-router-dom'
import { Fragment, useEffect, useState } from 'react'

const Dashboard = ()=>{
    useEffect(()=>{
        getCartItems()
    },[])
    const[selectedItemsArr,setSelectedItems]= useState([])
    const getCartItems=()=>{
        try{
            const cartArr = JSON.parse(localStorage.getItem('Cart'))
            let selectedItems=[]
            cartArr.forEach(item=>{
                if(item.quantity>0){
                    selectedItems.push(item)
                }
            })
            
            setSelectedItems(selectedItems)
            console.log(selectedItemsArr)
            
        }catch(err){
            console.error(err)
        }
    }
    
    return<Fragment>
            <div className="row dashcustom d-flex flex-column">
                <h1  className="col-12 text-center">Dashboard</h1>
                <div className='col-md-8 mx-auto'>
                <table className="table">
                    <thead>
                        <tr>
                        <th scope="col">ProdId</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedItemsArr.length>0 
                        ? selectedItemsArr.map((item)=>{
                                                return <tr key={item.id}>
                                                            <th scope="row">{item.id}</th>
                                                            <td>{item.name}</td>
                                                            <td>{item.price}</td>
                                                            <td>{item.quantity}</td>
                                                        </tr>})  
                        : <tr><td>No items selected</td></tr>}
                        
                        
                    </tbody>
                    </table>
                </div>
                <div className='col-md-8 mx-auto'>
                    <Link className='btn btn-block btn-dark' to='/dashboard/checkout'>Checkout!</Link>
                </div>
            </div>                                  
          </Fragment>          
    
    }


export default Dashboard