import styled, { css } from 'styled-components';

interface IOption {
  isMosaic: boolean;
  numberOfColumns: number;
}

const ItemNewsWrapper = styled.div<IOption>`
background-color: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.color};
width: calc(100% - 25px);  
border-radius: 15px;
border: 1px solid ${({ theme }) => theme.color};
padding: 10px;
display: flex;
flex-direction: column; 
cursor: pointer;
.news-info {
  display: flex;
  flex-direction: row; 
  gap: 30px; 
  margin-bottom: 10px; 
  font-size: 16px;
}
.news-title {
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  p {
    margin: 0;
  }
}

${(props) => {
    if (!props.isMosaic) {
      return css`
        width: auto;
        flex-direction: row;
        justify-content: space-between;
        .news-info {
          flex-direction: column;          
          align-items: flex-start;
          overflow: hidden;
          padding-right: 5px;
          gap: 5px;
        }
        .news-title {
            height: auto;
            white-space: normal;
        }
        `;
    }
  }};

  ${(props) => {
    if (!props.isMosaic && props.numberOfColumns === 3) {
      return css`
        .news-info {
          font-size: 16px;
          width: 130px;
          overflow: hidden;
        }
        .news-title {
          font-size: 28px;
          width: 240px;
        }
        `;
    }
    if (!props.isMosaic && props.numberOfColumns === 4) {
      return css`
        .news-info {
          font-size: 14px;
          width: 100px;
          overflow: hidden;
        }
        .news-title {
          font-size: 24px;
          width: 170px;
        }
        `;
    }
    if (!props.isMosaic && props.numberOfColumns === 5) {
      return css`
        .news-info {
          width: 100px;
          font-size: 12px;
          overflow: hidden;
        }
        .news-title {
          width: 105px;
          font-size: 20px;
        }
        `;
    }
  }};

margin-bottom: 10px;

`;

export default ItemNewsWrapper;
