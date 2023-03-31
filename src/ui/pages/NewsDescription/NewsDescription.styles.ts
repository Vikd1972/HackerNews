import styled from 'styled-components';

const NewsDescriptionWrapper = styled.div`
background-color: ${({ theme }) => theme.background};
color: ${({ theme }) => theme.color};
margin: 70px auto 0;
max-width: 1200px;
width: calc(100% - 50px);
border-radius: 15px;
border: 1px solid ${({ theme }) => theme.color};
padding: 10px;
display: flex;
flex-direction: column;
.news-info {
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 20px;
  font-size: 16px;
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
