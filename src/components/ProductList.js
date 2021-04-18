import styled from 'styled-components';
import Product from './Product';

const ProductListDiv = styled.div``;

function ProductList() {
    return (
        <ProductListDiv>
            <Product/>
        </ProductListDiv>
    );
}

export default ProductList;