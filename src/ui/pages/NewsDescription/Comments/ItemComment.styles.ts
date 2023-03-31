import styled from 'styled-components';

const ItemCommentWrapper = styled.div`
width: auto;
border-radius: 15px;
border: 1px solid ${({ theme }) => theme.color};
color: ${({ theme }) => theme.color};
background-color: ${({ theme }) => theme.background};
padding: 10px;
display: flex;
flex-direction: column;
.news-info {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 20px;
}
.news-text {
  cursor: pointer;
  overflow: hidden;
  white-space: wrap;
}
.news-text:hover {
  text-shadow: wheat 0 0 3px;
}
`;

export default ItemCommentWrapper;
