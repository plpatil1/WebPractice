import React from 'react'
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imgData from '../shared/constant/ConstData';

const SlidingImgComp = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        
        <img src={imgData.happy} style={{width:"600px", height:"500px"}} alt="img1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Happy Mood</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
       
        <img src={imgData.angry} style={{width:"600px", height:"500px"}} alt="img1" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Angry Mood.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        
        <img src={imgData.dosa} style={{width:"600px", height:"500px"}} alt="img1" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
           Dosa mood
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </div>
    )
}

export default SlidingImgComp;
