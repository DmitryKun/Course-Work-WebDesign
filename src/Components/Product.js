import {Card, CardBody, CardImg, Button} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

const Product = (prop) => {
    return (
        <Card className="m-2" style={{ maxWidth: '300px'}}>
            <CardImg
                variant="top"
                src={prop.img}
            />
            <CardBody>
                <Card.Title>{prop.title}</Card.Title>
                <Card.Text>{prop.price} UAH</Card.Text>
                <Link to={`/order/${prop.id}`}>
                    <Button className="buy-button" variant="dark">Buy</Button>
                </Link>
            </CardBody>
        </Card>

    );
}

export default Product;