import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductUpdate = () => {
    const {id} = useParams();
    const nav = useNavigate();


   const[product,setProduct] = useState({
           id:"",
           name:"",
           price:"",
           company:"",
           quantity:""
   
          });




    useEffect(()=>{
        // console.log(id);
        axios.get(`http://localhost:9090/products/${id}`).then((res)=>{
            // console.log(res.data);
            setProduct(...res.data);
        }).catch((error)=>{})
    },[]);

    
    const inputChangeHandler = (event)=> {
        // console.log(event.target.type);
        // console.log(event.target.name);
        // console.log(event.target.value);

        const {type,name,value} = event.target;
        setProduct({...product, [name]:value})

       }

       const addPro = (event) => {
        event.preventDefault();
        // console.log(product);
        axios.put(`http://localhost:9090/products/${id}`, product).then(()=>{
            window.alert("Product Added Successfully");
            nav("/main/productdash");
        }).catch((error)=>{});
       }

    return (
        <div>
            <h2>This is Product Update Component</h2>
            
            <div style={{width:"400px", margin:"auto"}}>
                <form onSubmit={addPro} >
                    <input type="text"  onChange={inputChangeHandler} name='name' placeholder='Enter Product Name' className='form-cotrol m-2' value={product.name} /> <br />
                    <input type="text"  onChange={inputChangeHandler} name='price' placeholder='Enter Product Price' className='form-cotrol m-2' value={product.price} /> <br />
                    <input type="text"  onChange={inputChangeHandler} name='company' placeholder='Enter Product Company Name' className='form-cotrol m-2' value={product.company} /> <br />
                    <input type="text"  onChange={inputChangeHandler} name='quantity' placeholder='Enter Product Quantity' className='form-cotrol m-2' value={product.quantity} /> <br />
                
                <button type='submit' className='btn btn-outline-success btn-sm m-3'>Submit</button>
                
                </form>
            </div>
        </div>
    )
}

export default ProductUpdate
