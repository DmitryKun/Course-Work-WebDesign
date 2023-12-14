import {Card, CardBody, CardImg, Button} from "react-bootstrap";

const Product = (prop) => {
    return (
        <Card className="m-2">
            <CardImg
                variant="top"
                src={prop.img}
            />
            <CardBody>
                <Card.Title>{prop.title}</Card.Title>
                <Button variant="dark" href="./product-info">Info</Button>
            </CardBody>
        </Card>
    );
}

export default Product;