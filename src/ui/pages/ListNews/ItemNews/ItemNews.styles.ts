import styled from 'styled-components';

const ItemNewsWrapper = styled.div`
margin: 0 auto;
max-width: 1200px;
width: 100%;
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
}
.news-title {
  font-weight: 700;
}
`;

export default ItemNewsWrapper;
