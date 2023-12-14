import React, { Component } from "react";
import {CardGroup, Container} from "react-bootstrap";
import {products} from "../Helpers/productList";
import Product from "../Components/Product";

export default class Accessories extends Component{
    render() {
        return (
            <div>
                <Container>
                    <h2 className="text-center">Accessories</h2>
                    <CardGroup className="d-flex">
                        {products
                            .filter(product => product.category === 'Accessories')
                            .map((product)=> {
                                return <Product id={product.id}
                                                title={product.title}
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