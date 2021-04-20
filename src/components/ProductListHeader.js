
import styled from 'styled-components';
 
const ProductListHeaderDiv = styled.div`
   display:flex;
   flex-flow:row;
   padding: 5px;
   
   & div{
    text-align:left;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 10px;
    line-height: 11px;
    color: #AAAAAA;
    }

    & .ean {
    width:10%
    }
    & .name {
    width:20%
    }
    & .producer {
    width:20%
    }
    & .size {
    width:10%
    }
    & .shelf {
    width:20%;
    }
    & .p_group {
    width:20%
    }
`;

function ProductListHeader(props) {
    return (
        <ProductListHeaderDiv>
            <div className="ean">EAN / PLU</div>
            <div className="name">NAME</div>
            <div className="producer">PRODUCER</div>
            <div className="size">SIZE</div>
            <div className="shelf">SHELF</div>
            <div className="p_group">PRODUCT GROUP</div>
            
        </ProductListHeaderDiv>
    );
}

export default ProductListHeader;