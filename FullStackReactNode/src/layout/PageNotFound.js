import React from 'react';
import imgData from '../shared/constant/ConstData';
import 'react-bootstrap';

 const PageNotFound = () => {
    return (
        <div className='container'>
            <h1>404................Page Not Found</h1> 
            <br /><br />
            <img src={imgData.err} alt="error404"  />
        </div>
    )
}

export default PageNotFound;