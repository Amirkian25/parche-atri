import {Carousel} from 'react-bootstrap';
import styled from 'styled-components'
import React from 'react';

import slid1 from "../image/slid1.webp";
import slid2 from "../image/slid2.webp";
import slid3 from "../image/slid3.webp";


const Div = styled.div`
  box-sizing: border-box;
  display : flex;
  justify-content : center;
  width: 52%;
  margin-right: 466px;
  
  
`
const Img = styled.img`
  border-radius: 8px;
  margin-top : 50px;
`
const Slidshow = () => {
   
  return (
    <Div>
      <Carousel>
        <Carousel.Item   >
          <Img src={slid1} height="300px" width="900px" alt='slid1' />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={slid2} height="300px" width="900px" alt='slid2' />
        </Carousel.Item>
        <Carousel.Item>
          <Img src={slid3} height="300px" width="900px" alt='slid3' />
        </Carousel.Item>





      </Carousel>
    </Div>
  );
};

export default Slidshow;