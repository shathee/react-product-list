import styled from 'styled-components';
import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import {setIntialProductList, setProductShelfs, setProductGroups} from '../redux/actions'
import Product from './Product';
import LoadingSpinner from './LoadingSpinner';
import ProductListHeader from './ProductListHeader';
import { FixedSizeList as List } from "react-window";


const ProductListDiv = styled.div`
    min-height:90vh;
    width:90vw;
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


  const Row = ({ index, style }) => (
    <Product style={style} item={ products[index] }/>
  )

  let contents;
  if (prodactDataLoaded & shelfDataLoaded & groupDataLoaded) {
    contents = <List
              width={1340}
              height={products.length}
              itemCount={products.length}
              itemSize={35}
            >
              {Row}
            </List>
  }else{
    contents = <LoadingSpinner />;
  }
  
  return (
    <ProductListDiv>
        <ProductListHeader/>
        {contents}
    </ProductListDiv>
  );
}
export default ProductList;