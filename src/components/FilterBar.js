import styled from 'styled-components';
import filterImg from '../assets/images/filter.svg';
import { useDispatch } from 'react-redux';
import { filterProductByName } from '../redux/actions'


const FilterBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #60A5EA;
    width:100%;
    height:54px;
    
    & input{
        display: flex;
        align-items: center;
        background: url(${filterImg}) no-repeat 1% center #FFFFFF;
        border-radius: 4px;
        width:95%;
        padding: 8px 10px 8px 40px;
        border:none;
        font-size:16px;
        
    }
    & input:focus{
        border:1px solid #387DC2;
    }
`;


function FilterBar() {
    const dispatch = useDispatch();
    
    const filterByName = (e) => {
        const name = e.target.value;
        dispatch(filterProductByName(name))
    }

    return (
        <FilterBarDiv>
            <input placeholder="Filter by name" onChange={filterByName} />
        </FilterBarDiv>
    );
}

export default FilterBar;