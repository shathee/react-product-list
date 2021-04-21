import styled, { keyframes } from "styled-components";


const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 15px }
  100% { margin-bottom: 0 }
`;
const DotWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
`;
const Dot = styled.div`
  background-color: #512D38;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 0 5px;
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;
const LoadingSpinnerDiv = styled.div`
    margin:auto;
    display:flex;
    padding: 20px 0;
    flex-flow:column;
    & h3 {
        color: #7F7CAF;
        padding: 15px 0;
    }
`;


function LoadingSpinner () {
    return(
        <LoadingSpinnerDiv>
            <DotWrapper>
            <Dot delay="0s" />
            <Dot delay=".1s" />
            <Dot delay=".2s" />
            </DotWrapper>
            <h3>
            Please wait while loading the data
            </h3>
        </LoadingSpinnerDiv>
        
    )
}

export default LoadingSpinner;