import styled from 'styled-components';

const AppWrapper = styled.div` margin: 0 auto;
max-width: 1200px;
padding: 0 20px;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
@media (max-width: 1240px) {
  width: calc(100% - 40px);
}

`;

export default AppWrapper;
