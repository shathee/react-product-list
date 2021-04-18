import styled from 'styled-components';

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
        background: #FFFFFF;
        border-radius: 4px;
        width:100%;
        padding: 8px;
        border:none;
    }
    & input:focus{
        border:1px solid #387DC2;
    }
`;


function FilterBar() {
    return (
        <FilterBarDiv>
            <input />
        </FilterBarDiv>
    );
}

export default FilterBar;