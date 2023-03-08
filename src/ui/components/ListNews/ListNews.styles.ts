import styled from 'styled-components';

const ListNewsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
max-width: calc(100% - 3px);
width: 100%;
height: calc(90vh - 40px);
color: #454438;
background-color: #C1B49C;
border-left: 1px solid #454438;
border-right: 1px solid #454438;
overflow-y: auto;
.logo {
  margin-top: 10px;
}
.news-container {
 max-width: 940px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px 20px; 
}
`;

export default ListNewsWrapper;
