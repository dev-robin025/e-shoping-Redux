import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productAction';
import SingleProduct from './SingleProduct';
import loading from '../images/loading.gif';

const Products = () => {
    const allProduct = useSelector(state => state.productReducer.allProduct)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => dispatch(setProducts(res.data)))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Row>
                {
                    allProduct ? allProduct.map(product => <SingleProduct product={product} key={product.id} />) :
                        <img src={loading} style={{ width: '30%', margin: '0 auto' }} alt="" />
                }
            </Row>
        </Container>
    );
};

export default Products;