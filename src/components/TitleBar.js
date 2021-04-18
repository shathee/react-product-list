import styled from 'styled-components';

const TitleBarDiv = styled.div`
    background: linear-gradient(180deg, #387DC2 0%, #2B65B5 100%);
    width:100%;

    h3 {
        font-size:20px;
        font-family:Helvetica;
        font-weight:120;
        color:#fff;
        padding: 12px; 0;
        margin:auto;
    }
`;

function TitleBar() {
    return (
        <TitleBarDiv>
            <h3>Products</h3>
        </TitleBarDiv>
    );
}

export default TitleBar;