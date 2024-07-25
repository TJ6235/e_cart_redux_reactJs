import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, removefromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'


function Kart() {

       const cartArray = useSelector((state)=>state.cartReducer)
       console.log(cartArray);

       const dispatch = useDispatch()
       const [total,setTotal]=useState(0)
       const navigate = useNavigate()

       const getTotal = ()=>{
           setTotal(cartArray.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
       }

       useEffect(()=>{
        getTotal()         
       },[cartArray])

       const handleCheckout = ()=>{
           alert('order placed successfully')
           dispatch(emptyCart())
           navigate('/')
       }

  return (
    <>
   {cartArray?.length>0? <div className='container-fluid' style={{marginTop:'100px'}}>
            <h1 className='text-center'>CART</h1>
            <div className="row">
             <div className="col-md-8">
              <table className='table mt-5 rounded shadow  text-center'>
                 <thead>
                  <tr>
                    <th className='bg-secondary p-3'>#</th>
                    <th  className='bg-secondary p-3'>Title</th>
                    <th className='bg-secondary p-3'>Image</th>
                    <th className='bg-secondary p-3'>Price</th>
                    <th className='bg-secondary p-3'>Action</th>
                  </tr>
                 </thead>
                 <tbody>
                {cartArray?.map((item,index)=>(
                  <tr>
                    <td>{index+1}</td>
                    <td>{item.title}</td>
                    <td><img src={item.image} alt="" width={'150px'} height={'150px'} /></td>
                    <td>{item.price}</td>
                    <td><button onClick={()=>dispatch( removefromCart(item.id))} className='btn btn-danger rounded shadow'><FontAwesomeIcon icon={faTrash}/></button></td>
                  </tr>
                ))}
                 </tbody>
              </table>
             </div>
             <div className="col-md-4 px-5 text-center">
                    <div className=" shadow rounded mt-2 p-3">
                      <h3>Cart Summary</h3>
                      <h4>Total Number of products : {cartArray?.length} </h4>
                      <h4>Grand Total : {total} </h4>
                        <button onClick={handleCheckout} className='btn btn-success w-50 mt-2'>CheckOut</button>
                    </div>
             </div>
            </div>
      </div>
      :
      <div style={{width:'100%',height:'80vh'}} className="d-flex justify-content-center align-items-center mt-5">
            <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="no -image" />
           </div>}
    </>
  )
}

export default Kart