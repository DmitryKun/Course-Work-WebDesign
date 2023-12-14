import React, { useState } from 'react';
import { Card, CardBody, CardGroup, CardImg, Col, Container, Row } from 'react-bootstrap';
import { products } from '../Helpers/productList';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const Order = () => {
    const { id } = useParams();
    const [formData, setFormData] = useState({}); // Хранение данных формы

    const handleSubmit = (event) => {
        event.preventDefault();
        // Сохранение данных в локальное хранилище при отправке формы
        localStorage.setItem('formData', JSON.stringify(formData));
    };

    const handleInputChange = (event) => {
        // Обновление состояния formData при изменении значений полей формы
        setFormData({
            ...formData,
            [event.target.id]: event.target.value,
        });
    };

    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <CardGroup>
                            {products
                                .filter(product => product.id === id)
                                .map((product) => (
                                    <Card className="m-2" style={{ maxWidth: '300px'}} key={product.id}>
                                        <CardImg variant="top" src={product.img} />
                                        <CardBody>
                                            <Card.Title>{product.title}</Card.Title>
                                            <Card.Text>{product.price} UAH</Card.Text>
                                        </CardBody>
                                    </Card>
                                ))}
                        </CardGroup>
                    </Col>
                    <Col style={{ marginTop: '20px' }}>
                        <Form onSubmit={handleSubmit}>
                            {/* Привязываем функцию handleInputChange к событию onChange каждого поля */}
                            <Form.Group className="mb-3" controlId="formFullName">
                                <Form.Control
                                    type="text"
                                    placeholder="Full name"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formAddress">
                                <Form.Control
                                    type="text"
                                    placeholder="Address"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPhone">
                                <Form.Control
                                    type="tel"
                                    placeholder="Phone number"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formCardNumber">
                                <Form.Control
                                    type="text"
                                    placeholder="Card number"
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                            <Row>
                                <Col>
                                    <Form.Group className="md-3" controlId="cardDetails">
                                        <Form.Control
                                            type="text"
                                            placeholder="Card data"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group className="md-3" controlId="cvv">
                                        <Form.Control
                                            type="text"
                                            placeholder="CVV"
                                            onChange={handleInputChange}
                                        />
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Button variant="dark" type="submit">
                                        Submit
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Order;
