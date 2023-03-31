import styled from 'styled-components';

const ConfigWrapper = styled.div`
color: ${({ theme }) => theme.color};
background-color: ${({ theme }) => theme.background};
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, 50%);
width: 360px;
height: 240px;
border-radius: 15px;
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid ${({ theme }) => theme.color};
.switch-wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.selector-wrapper {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-left: 90px;
}
`;

export default ConfigWrapper;
