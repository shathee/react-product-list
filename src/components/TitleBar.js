import styled from 'styled-components';

const TitleBarDiv = styled.div`
    background: linear-gradient(180deg, #387DC2 0%, #2B65B5 100%);
    width:100%;
    min-height: 54px;

    h3 {
        font-family: Helvetica;
        font-style: normal;
        font-weight: normal;
        font-size: 20px;
        line-height: 23px;
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