import styled from 'styled-components';
import { useEffect, useState } from 'react';

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
  const [dataloaded, setdataloaded] = useState(false);

  useEffect(() => {
    async function getProductsData() {
      let response = await fetch('./data/products.json')
      response = await response.json()
      dispatch(setIntialProductList(response));
      setdataloaded(true)
    }

    getProductsData();
  }, [])




  let contents;
  if (dataloaded) {
    contents = <AutoSizer>
          {({ height, width }) => (
              <List
              width={width}
              height={height}
              itemCount={products.length}
              itemSize={25}
            >
              {Row}
            </List>
          )}
      </AutoSizer>
  }else{
    contents = 'No data Loaded';
  }
  
  const Row = ({ index, style }) => (
    <Product style={style} item={ products[index] }/>
  )

  return (
    <ProductListDiv>
        <ProductListHeader/>
        {contents}
    </ProductListDiv>
  );
}
export default ProductList;