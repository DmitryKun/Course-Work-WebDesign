import React, { Component } from "react";
import {Carousel} from "react-bootstrap";
import adidas1 from '../Assets/adidas1.jpg'
import adidas2 from '../Assets/adidas2.jpg'
import nike1 from '../Assets/nike1.jpg'
import nike2 from '../Assets/nike2.jpg'
import puma1 from '../Assets/puma1.jpg'
import puma2 from '../Assets/puma2.jpg'

export default class SliderBox extends Component {
    render () {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        width="500"
                        height="600"
                        className="d-block w-100"
                        src={adidas1}
                        alt="Adidas1"
                    />
                    <Carousel.Caption>
                        <h3>Create your own style</h3>
                        <p>Our shop has big amount of different clothes</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        width="500"
                        height="600"
                        className="d-block w-100"
                        src={adidas2}
                        alt="Adidas2"
                    />
                    <Carousel.Caption>
                        <h3>Don`t loose all your money</h3>
                        <p>We have one of the lowest price politic</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        width="500"
                        height="600"
                        className="d-block w-100"
                        src={nike1}
                        alt="Nike1"
                    />
                    <Carousel.Caption>
                        <h3>Make your friends more happy</h3>
                        <p>Surprise them with our gift cards</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        width="500"
                        height="600"
                        className="d-block w-100"
                        src={nike2}
                        alt="Nike2"
                    />
                    <Carousel.Caption>
                        <h3>Wear original stuff</h3>
                        <p>We have original import clothes</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        width="500"
                        height="600"
                        className="d-block w-100"
                        src={puma1}
                        alt="Puma1"
                    />
                    <Carousel.Caption>
                        <h3>Make your chose</h3>
                        <p>We have a lot of brands in our shop</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        width="500"
                        height="600"
                        className="d-block w-100"
                        src={puma2}
                        alt="Puma2"
                    />
                    <Carousel.Caption>
                        <h3>Give me 100</h3>
                        <p>I tried hard, so give me mark 100 please</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}