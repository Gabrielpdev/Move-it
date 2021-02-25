import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem 2.5rem 6.5rem;

  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
  }

  @media (max-width: 992px){
    section {
      gap: 1.25rem;
    }
  }

  @media (max-width: 800px){
    padding: 1rem;
    section {
      margin-top: 3.5rem;
      grid-template-columns: auto;
    }
  }
  
  @media (max-width: 542px){
    section {
      grid-template-columns: auto;
    }
  }
`

export const LeftSide = styled.div`

`;

export const RightSide = styled.div`
  @media (max-width: 800px){
    margin-bottom: 1rem;
  }
`;
