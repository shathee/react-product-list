import styled from 'styled-components';
import dropdown from '../assets/images/drop-down.svg';
import { useSelector } from 'react-redux';

 
const ProductDiv = styled.div`
   display:flex;
   flex-flow:row;
   padding: 5px;
   
   & div{
       text-align:left;
       font-size:12px;
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
    width:20%;

   }

   & select {
      background: url(${dropdown}) no-repeat right center #FFFFFF;
      width: 90%;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
   }
`;


function Product(props) {
  const shelfData = useSelector( (state) => state.shelfs);
  const groupData = useSelector( (state) => state.product_groups);

    return (
        <ProductDiv key={props.item.id} style={props.style} >
            <div className="ean">{props.item.ean_plu}</div>
            <div className="name">{props.item.name}</div>
            <div className="producer">{props.item.producer}</div>
            <div className="size">{props.item.wt_vol_pce}</div>
            <div className="shelf">
                <select>
                {shelfData.map( d =>
                <option key={d.id} value={d.id}>{d.name}</option>
                )};
                </select>
            </div>
            <div className="p_group">
            <select>
                {groupData.map( d =>
                <option key={d.id} value={d.id}>{d.name}</option>
                )};
                </select>
            </div>
        </ProductDiv>
    );
}

export default Product;