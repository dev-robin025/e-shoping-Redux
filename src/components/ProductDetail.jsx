import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Row, Col, Container, InputGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, removeSelectedProduct, selectedProduct } from '../redux/actions/productAction';
import loading from '../images/loading.gif';

const ProductDetail = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.productReducer.selectedProduct)

    const fetchProduct = async () => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => dispatch(selectedProduct(res.data)))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        fetchProduct()
        return () => {
            dispatch(removeSelectedProduct())
        }
    }, [])

    return (
        <Container>

            {
                product ?
                    <Row className="bg-light">
                        <Col md={4} className="d-flex justify-content-center">
                            <img src={product.image} className="img-fluid" style={{ height: '400px' }} alt="" />
                        </Col>
                        <Col>
                            <h2>{product.title}</h2><br />
                            <InputGroup className="mb-1">
                                <InputGroup.Text style={{ background: 'orange', color: 'black' }}>
                                    <b>$ {product.price}</b>
                                </InputGroup.Text>
                            </InputGroup>
                            <InputGroup className="mb-1">
                                <InputGroup.Text style={{ width: '100%' }}>
                                    <b>{product.category}</b>
                                </InputGroup.Text>
                            </InputGroup>
                            <p>{product.description}</p>
                            <Button variant="secondary" 
                            onClick={()=>dispatch(addToCart(product))}>Add to Cart</Button>
                        </Col>
                    </Row> :
                    <div className="d-flex justify-content-center">
                        <img src={loading} style={{ margin: '0 auto' }} alt="" />
                    </div>
            }
        </Container>
    );
};

export default ProductDetail;