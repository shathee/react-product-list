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
        <ProductDiv key={props.item.id} style={props.style} >
            <div>{props.item.ean_plu}</div>
            <div>{props.item.name}</div>
            <div>{props.item.producer}</div>
            <div>{props.item.wt_vol_pce}</div>
        </ProductDiv>
    );
}

export default Product;