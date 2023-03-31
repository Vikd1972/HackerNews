import styled from 'styled-components';

const AppWrapper = styled.div` 
margin: 0 auto;
background-color: ${({ theme }) => theme.background};
width: 100%;
min-height: 100vh;
display: flex;
flex-direction: column;
`;

export default AppWrapper;
