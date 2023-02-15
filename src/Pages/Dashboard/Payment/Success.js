import axios from 'axios';
import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import img from '../../../assets/ui-animation.gif'
const Success = () => {
    const {id} = useParams()
    const [order,setOrder] = useState({})
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/v1/order/${id}`)
        .then(response=>{
            console.log(response?.data?.result );
            setOrder(response?.data?.result)
        })
        .catch(error=>{
            console.log(error);
        })
    },[id])
    const paymentSuccess = e =>{
         
        axios.post(`http://localhost:5000/api/v1/order`,{
            tran_id:id,
            val_id:order?.val_id
        })
        .then(response=>{
            console.log(response?.data );
            setOrder(response?.data?.result)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className='container mx-auto text-center'>
             {/* <img src={img} alt="...loading"  /> */}
             <h1> name of customer  {order?.cus_name} </h1>
             <button onClick={()=>paymentSuccess(id)}>confirm order</button> 
             <h1>
                 
             </h1>
             <h2>

             </h2>
        </div>
    );
};

export default Success;