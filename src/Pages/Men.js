import React, { Component } from "react";
import {products} from "../Helpers/productList"
import {CardGroup, Container} from "react-bootstrap";
import Product from '../Components/Product'

export default class Men extends Component{
    render() {
        return (
            <div>
                <Container>
                    <h2 className="text-center">Men clothes</h2>
                    <CardGroup className="d-flex">
                            {products
                                .filter(product => product.category === 'Men')
                                .map((product)=> {
                                return <Product title={product.title}
                                                img={product.img}
                                                price={product.price}
                                                category={product.category}
                            />
                        })}
                    </CardGroup>
                </Container>
            </div>
        )
    }
}