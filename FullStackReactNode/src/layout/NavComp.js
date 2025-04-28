import React from 'react'
import { Link } from 'react-router-dom'

const NavComp = () => {
    const Login = () =>{
        if(window.confirm(`Are you Sure to Logout`)){
            
        }
    }
    return (
        <div>
            {/* <h1>This is Nav Component</h1> */}

                <Link to="myimages" className='btn btn-primary btn-sm m-2'>MyImages</Link>
                <Link to="csscomp" className='btn btn-primary btn-sm m-2'>CssComp</Link>
                <Link to="state" className='btn btn-primary btn-sm m-2'>State</Link>
            <Link to="hooks" className='btn btn-primary btn-sm m-2'>Hooks</Link>
            <Link to="slidingImg" className='btn btn-danger btn-sm m-2'>SlidingImg</Link>
            <Link to="productdash" className='btn btn-warning btn-sm m-3'>CRUD</Link>
            <button type='button' style={{float:"right"}} className='btn btn-outline-secondary m-3' onClick={()=>{Login()}}>Logout</button>
            <Link to=""></Link>
        </div>
    )
}

export default NavComp
