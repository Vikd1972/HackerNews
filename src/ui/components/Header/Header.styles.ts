import styled from 'styled-components';

const HeaderWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 8px;
margin-top: 20px;
width: 100%;
height: 5vh;
color: #C1B49C;
background-color: #454438;
border-radius: 20px 20px 0 0;
@media (max-width: 400px) {
  flex-direction: column;
  line-height: 24px;
  p {
    white-space: nowrap;
    margin: 0;  
  }
}
`;

export default HeaderWrapper;
