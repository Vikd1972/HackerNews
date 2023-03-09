import styled from 'styled-components';

const HeaderWrapper = styled.div`
color: #C1B49C;
background-color: #454438;
position: fixed;
width: 100%;
.header-box {
  margin: 0 auto;;
  padding: 0 50px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;  
  height: 60px;
}
.no-lazy {
  width: 400px;
  height: auto;
}
.date-box {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.button-box {
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
}
`;

export default HeaderWrapper;
