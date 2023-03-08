import styled from 'styled-components';

const NewsDescriptionWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
max-width: calc(100% - 3px);
width: 100%;
height: calc(90vh - 40px);
color: #454438;
background-color: #C1B49C;
border-left: 1px solid #454438;
border-right: 1px solid #454438;
overflow-y: auto;
`;

export default NewsDescriptionWrapper;
