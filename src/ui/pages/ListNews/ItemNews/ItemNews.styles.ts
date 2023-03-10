import styled from 'styled-components';

const ItemNewsWrapper = styled.div`
margin: 0 auto;
max-width: 1200px;
width: calc(100% - 50px);
border-radius: 15px;
border: 1px solid #454438;
padding: 10px;
display: flex;
flex-direction: column;
cursor: pointer;
div {
  display: flex;
  flex-direction: row;
  p {
    margin: 0 0 0 10px;  
  }
}
.news-info {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 20px;
  overflow: hidden;
}
.news-title {
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
}
`;

export default ItemNewsWrapper;
