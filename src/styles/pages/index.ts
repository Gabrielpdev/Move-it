import styled from 'styled-components';


export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  /* margin: 0 auto; */
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  
  background: url('/background-logo.png') no-repeat;
  background-size: contain;
  background-position: center left;
  background-color: ${({theme}) => theme.colors.backgroundIndex };

  section {
    max-width: 992px;
    margin: 0 auto;
    flex: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;
    position: relative;

    
    
    @media (max-width: 520px){

      grid-template-columns: 1fr;
      gap: 0;
    }
  }
`

export const LeftSide = styled.div`
  /* position: relative; */

  button{
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    background: transparent;
    color: ${({ theme }) => theme.colors.white};
   
  }
`;

export const RightSide = styled.div`
  display :flex;
  justify-content: space-between;
  flex-direction: column;

  >div{
    display: flex;
    flex-direction: column;

    strong {
      margin-top: 8rem;
      font-size: 3rem;
      font-weight: 500;
      color: ${({theme}) => theme.colors.white };
    }
  }

  @media (max-width: 520px){
    width: 85vw;
    >div{
      strong {
        font-size: 2rem;
      }
    }
  }
`;

export const TitleContainer = styled.div`
  display: flex;

  margin: 3rem 0;

  svg{
    color: ${({theme}) => theme.colors.white };
  }

  span {
    max-width: 300px;
    margin-left: 1rem;
    font-size: 1.4rem;
    font-weight: 500;
    color: ${({theme}) => theme.colors.white };
  }

  @media (max-width: 520px){
    span {
    font-size: 1.3rem;
  }
  }
`;