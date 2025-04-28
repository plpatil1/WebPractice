import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComp from './NavComp';
import FooterComp from './FooterComp';

const MainDashBoard = () => {
    return (
        <div className='container'>
            <h1>This is main Dash Board</h1>
           
           <div className='card border-primary'>


            <div className='card-header border-primary'>
                <NavComp/>
            </div>

            <div className='card-body border-primary'>
            <Outlet/>
            </div>

            <div className='card-footer border-primary'>
           <FooterComp />
            </div>
   
           </div>
           
           
        </div>
    )
}

export default MainDashBoard
