import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ProductDasComp = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
     }, []);


    const fetchData = () => {
        axios.get("http://localhost:9090/products").then((res) => {
            setProduct(res.data);

        }).catch((error)=>{ })
    }
   
    const deletePro = (id) => {
        // window.alert(id);
        if(window.confirm(`Are you Sure to Delete Product with ID :${id}`)){
     
            axios.delete(`http://localhost:9090/products/${id}`).then(()=>{
                window.alert("Product Delte Succuessfully");
                fetchData();
            }).catch((rror)=>{});

        }
        
    }
    return (
        <div>
            <h1>This iis Product Dash Component</h1>
                   <Link to="/main/productAdd" className='btn btn-outline-primary btn-sm m-3'>
                    <AddIcon></AddIcon> Add</Link>
            <table className='table table-hover table-striped'>
                 <thead>
                    <tr>
                        <th>Sr.No</th><th>Name</th><th>Price</th><th>Company</th><th>Quantity</th> <th>
                        Action
                        </th>
                    </tr>
                 </thead>
               <tbody>
                    {
                        product.map((val,index)=>{
                            return <tr>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.company}</td>
                                <td>{val.quantity}</td>
                                
                                <td>
                                    <Link to={`/main/productUpdate/${val.id}`}  className='btn btn-outline-warning btn-sm m-3'> <ModeEditIcon></ModeEditIcon>  </Link>
                                    
                                    <button type='button' onClick={()=>deletePro(val.id)} className='btn btn-outline-danger btn-sm m-3'> <DeleteIcon></DeleteIcon> </button>
                                </td>
                                    
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ProductDasComp
