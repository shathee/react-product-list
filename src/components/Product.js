import styled from 'styled-components';
import dropdown from '../assets/images/drop-down.svg';


const selectData = [
    {
      "id": 1414,
      "name": "Färdigmat"
    },
    {
      "id": 1415,
      "name": "Ost"
    },
    {
      "id": 1416,
      "name": "Sill/kaviar"
    },
    {
      "id": 1417,
      "name": "Korv/köttbullar färsk pasta"
    },
    {
      "id": 1419,
      "name": "Färsk ost"
    },
    {
      "id": 1420,
      "name": "Pålägg"
    },
    {
      "id": 1421,
      "name": "Glutenfritt"
    },
    {
      "id": 1422,
      "name": "Barnmat"
    },
    {
      "id": 1423,
      "name": "Smör/laktosfritt"
    },
    {
      "id": 1424,
      "name": "Mjölk/fil"
    },
    {
      "id": 1425,
      "name": "Ej kylda juicer"
    },
    {
      "id": 3476,
      "name": "Såser, pulled pork"
    },
    {
      "id": 3478,
      "name": "Hårdost"
    },
    {
      "id": 3479,
      "name": "Veggo"
    },
    {
      "id": 3480,
      "name": "Mackkyl"
    }
  ]

 
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
    return (
        <ProductDiv key={props.item.id} style={props.style} >
            <div className="ean">{props.item.ean_plu}</div>
            <div className="name">{props.item.name}</div>
            <div className="producer">{props.item.producer}</div>
            <div className="size">{props.item.wt_vol_pce}</div>
            <div className="shelf">
                <select>
                {selectData.map( d =>
                <option key={d.id} value={d.id}>{d.name}</option>
                )};
                </select>
            </div>
            <div className="p_group">
            <select>
                {selectData.map( d =>
                <option key={d.id} value={d.id}>{d.name}</option>
                )};
                </select>
            </div>
        </ProductDiv>
    );
}

export default Product;