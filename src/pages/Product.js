import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getProduct } from '../slices/productSlide'
import { useEffect } from 'react';
export default function Product() {
    const dispatch = useDispatch();
    const productData = useSelector(state => state.product);
    const { isLoading, homeData, error } = productData;
    const { lastProducts } = homeData

    useEffect(() => {
        dispatch(getProduct())
    }, []);
    return (
        <div>



            {isLoading && <div>Đang tải</div>}
            {error && <div>Lỗi</div>}
            {lastProducts &&
                lastProducts.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                    </div>
                ))}
        </div>
    )
}
