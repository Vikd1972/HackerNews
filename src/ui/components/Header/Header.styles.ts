import styled, { css } from 'styled-components';

interface IOption {
  myTheme: boolean;
}

const HeaderWrapper = styled.div<IOption>`
color: ${({ theme }) => theme.color};
background-color: ${({ theme }) => theme.background};
position: fixed;
width: 100%;
.header-box {
  margin: 0 auto;
  padding: 5px 0;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1220px;
  width: calc(100% - 30px);
  height: 60px;
  gap: 10px;
}
.logo-box {
  padding: 5px;
  height: auto;
  border-radius: 5px;  
  ${(props) => {
    if (props.myTheme) {
      return css`
          background-color: ${({ theme }) => theme.color};
          `;
    }
  }};
}
.no-lazy {
  color: ${({ theme }) => theme.color};
  width: 400px;
  height: auto;
}
.date-box {
  display: flex;
  flex-direction: row;
  gap: 10px;
}
.button-box {
  width: 215px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
}
`;

export default HeaderWrapper;
