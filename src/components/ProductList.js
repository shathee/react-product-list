import styled from 'styled-components';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {setIntialProductList} from '../redux/actions'
import Product from './Product';
import ProductListHeader from './ProductListHeader';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";


const ProductListDiv = styled.div`
    height:80vh;
    padding: 10px;
`;

function ProductList() {
  const products = useSelector( (state) => state.products);
  const dispatch = useDispatch();
  const getProductsData = () => {
    fetch("./data/products.json")
    .then(response => response.json())
    .then( data => dispatch(setIntialProductList(data)))
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getProductsData();
  }, [] );

  
  const Row = ({ index, style }) => (
    <Product style={style} item={products[index]}/>
  )
  return (
    <ProductListDiv>
        <ProductListHeader/>
        <AutoSizer>
            {({ height, width }) => (
                <List
                width={width}
                height={height}
                itemCount={1000}
                itemSize={25}
              >
                {Row}
              </List>
            )}
        </AutoSizer>
    </ProductListDiv>
  );
}
export default ProductList;