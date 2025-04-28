import React from 'react';
import imgData from '../shared/constant/ConstData';
import { Button } from 'react-bootstrap';


 const MyImageComp = () => {
    return (
        <div>
            <h2 className='text-primary'>This is my Images Comp</h2> 
            <img src={imgData.happy} alt='happy'  width="420px" height="250px"/>
            <img src={imgData.angry} alt='angry'  width="420px" height="250px"/>
            <br /> <br />
            <Button>SimpleButton</Button>
            <Button variant='outline-danger'>DangerButton</Button>
            <audio src={imgData.audio}>PressHere</audio>
        </div>
    )
}

export default MyImageComp;