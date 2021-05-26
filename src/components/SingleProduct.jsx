import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { id, title, price, description, category, image } = product;

    return (
        <Col md={3} className="mt-4">
            <Card style={{ width: '16rem' }} className="bg-light">
                <h5><b>$ {price}</b></h5>
                <img src={image} className="img-fluid p-3" style={{ height: '250px' }} alt="" />
                <Card.Body className="">
                    <Card.Title>{title}</Card.Title>
                    <Link to={`/product/${id}`}>
                        <Button style={{ background: 'orange', color: 'black' }}>
                            <b>Details</b>
                        </Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;