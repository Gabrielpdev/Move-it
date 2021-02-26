import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;

  height: 100vh;
  width: 3rem;
  padding: 2.3rem 2.2rem;

  background: ${({ theme }) => theme.colors.backgroundLight};

  > svg {
    path{
      fill: ${({ theme }) => theme.colors.logoColor};
    }
  }

  > div button{
    &:not(:first-child){
      margin-top: 10px;
    }
  }

  button{
    border: 0;
    background: transparent;
    outline-color: ${({ theme }) => theme.colors.backgroundLight};

    svg {
      color: ${({ theme }) => theme.colors.text};
    }
  }

  @media (max-width: 800px){    
    flex-direction: row;

    padding: 2rem;
    left: unset;
    right: 0;
    top: 0;

    width: 100%;
    height: 3rem;
    
    svg {
      width: 2.2rem;
    }
  }
`;