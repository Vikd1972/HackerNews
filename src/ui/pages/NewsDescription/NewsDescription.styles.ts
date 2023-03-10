import styled from 'styled-components';

const NewsDescriptionWrapper = styled.div`
margin: 70px auto 0;
max-width: 1200px;
width: calc(100% - 50px);
/* width: 100%; */
border-radius: 15px;
border: 1px solid #454438;
padding: 10px;
display: flex;
flex-direction: column;
.news-info {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 20px;
}
.news-title {
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
}
.news-link {
  text-decoration: inherit;
  color: inherit;
  overflow: hidden;
  white-space: nowrap;
}
`;

export default NewsDescriptionWrapper;
