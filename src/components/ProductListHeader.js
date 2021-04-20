
import styled from 'styled-components';
 
const ProductListHeaderDiv = styled.div`
   display:flex;
   flex-flow:row;
   padding: 5px;
   
   & div {
       padding:5px;
   }
`;

function ProductListHeader(props) {
    return (
        <ProductListHeaderDiv>
            <div>EAN / PLU</div>
            <div>NAME</div>
            <div>PRODUCER</div>
            <div>SIZE</div>
        </ProductListHeaderDiv>
    );
}

export default ProductListHeader;