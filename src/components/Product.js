import styled from 'styled-components';

 
const ProductDiv = styled.div`
   display:flex;
   flex-flow:row;
   padding: 5px;
   
   & div {
       padding:5px;
   }
`;

function Product(props) {
    return (
        <ProductDiv key={props.pkey} style={props.style} >
            <div>{props.item.id}</div>
            <div>{props.item.title}</div>
        </ProductDiv>
    );
}

export default Product;