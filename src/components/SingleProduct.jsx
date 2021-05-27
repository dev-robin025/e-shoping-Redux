import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../redux/actions/productAction';

const SingleProduct = ({ product }) => {
    const { id, title, price, description, category, image } = product;
    const dispatch = useDispatch()

    return (
        <Col md={3} className="mt-4">
            <Card style={{ width: '16rem' }} className="bg-light">
                <h5><b>$ {price}</b></h5>
                <Link to={`/product/${id}`}>
                    <img src={image} className="img-fluid p-3" style={{ height: '250px' }} alt="" />
                </Link>
                <Card.Body className="">
                    <Link to={`/product/${id}`}>
                        <Card.Title>{title}</Card.Title>
                    </Link>
                    <Button style={{ background: 'orange', color: 'black' }}
                        onClick={() => dispatch(addToCart(product))}>
                        <b>add to cart</b>
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default SingleProduct;