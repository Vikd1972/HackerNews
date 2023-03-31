import styled, { css } from 'styled-components';

interface IOption {
  isMosaic: boolean;
}

const ListNewsWrapper = styled.div<IOption>`
margin: 70px auto 0;
background-color: ${({ theme }) => theme.background};
display: flex;
flex-direction: column;
max-width: 1220px;
width: 100%;
padding: 0 10px;
${(props) => {
    if (!props.isMosaic) {
      return css`
      flex-direction: row;
      justify-content: space-between;
      `;
    }
  }};
`;

export default ListNewsWrapper;
