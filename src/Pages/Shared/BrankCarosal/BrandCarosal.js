import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const BrandCarosal = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://ik.imagekit.io/ikmedia/backlit.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.pinimg.com/originals/f1/5c/6a/f15c6a1f1976bf4cf8b8d89a8be0ad77.jpg"
                    alt="Second slide"
                />
            </Carousel.Item>
            
        </Carousel>
    );
};

export default BrandCarosal;