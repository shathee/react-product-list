import styled from 'styled-components';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import {setIntialProductList} from '../redux/actions'
import Product from './Product';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";


const ProductListDiv = styled.div`
    height:80vh;
    padding: 10px;
`;

function ProductList() {

  const dispatch = useDispatch();
  const getProductsData = () => {
    fetch("./data/product_groups.json")
    .then(response => response.json())
    .then( data => dispatch(setIntialProductList(data)))
    .catch(err => {
      console.log(err);
    });
  }

  useEffect(() => {
    getProductsData();
  }, [] );
  
  const data = new Array(1000).fill().map((value, id) => (({
    id: id,
    title: 'Title' + id
  })))
   

  const Row = ({ index, style }) => (
    <Product pkey={index} style={style} item={data[index]}/>
  )
  return (
    <ProductListDiv>
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