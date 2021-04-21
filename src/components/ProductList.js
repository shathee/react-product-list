import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {setIntialProductList, setProductShelfs, setProductGroups} from '../redux/actions'
import Product from './Product';
import ProductListHeader from './ProductListHeader';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";


const ProductListDiv = styled.div`
    height:80vh;
    padding: 10px;
`;

function ProductList() {
  
  const products = useSelector( (state) => state.visible_products);
  
  const dispatch = useDispatch();
  const [prodactDataLoaded, setProdactDataLoaded] = useState(false);
  const [shelfDataLoaded, setShelfDataLoaded] = useState(false);
  const [groupDataLoaded, setGroupDataLoaded] = useState(false);

  useEffect(() => {
    async function getProductsData() {
      let response = await fetch('./data/products.json')
      response = await response.json()
      dispatch(setIntialProductList(response));
      setProdactDataLoaded(true)
    }
    async function getShelfData() {
      let response = await fetch('./data/shelfs.json')
      response = await response.json()
      dispatch(setProductShelfs(response));
      setShelfDataLoaded(true)
    }
    async function getGroupData() {
      let response = await fetch('./data/product_groups.json')
      response = await response.json()
      dispatch(setProductGroups(response));
      setGroupDataLoaded(true)
    }

    getProductsData();
    getShelfData();
    getGroupData();
  }, [])


  let contents;
  if (prodactDataLoaded & shelfDataLoaded & groupDataLoaded) {
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
    contents = 'Please Wait data is loading';
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