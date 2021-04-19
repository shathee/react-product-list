import styled from 'styled-components';

import Product from './Product';
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";


const ProductListDiv = styled.div`
    height:80vh;
`;

function ProductList() {
  const data = new Array(100000).fill().map((value, id) => (({
    id: id,
    title: 'Title' + id
  })))

  const Row = ({ index, key, style }) => (
    <Product key={key} style={style} item={data[index]}/>
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