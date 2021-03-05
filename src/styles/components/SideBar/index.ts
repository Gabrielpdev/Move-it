import styled from 'styled-components';

export const Container = styled.nav`
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

  > nav  a{
    display: flex;
    cursor: pointer;
    position: relative;
    
    &:not(:first-child){
      margin-top: 16px;
    }

    &.active{
      color: ${({ theme }) => theme.colors.logoColor};

      &::before{
        content: "";
        background: ${({ theme }) => theme.colors.logoColor};
        border-radius: 0px 5px 5px 0px;
        position: absolute;
        left: -1.24rem;
        width: 4px;
        height: 100%;

        @media (max-width: 1366px){    
          left: -1rem;
        }
      }
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

    > div {
      display: flex;
      align-items:center;

      a:last-child{
        margin-left: 16px;
        margin-top: 0;
      }
    }
  }

  @media (max-width: 800px){    
   >nav{
     display: flex;
     align-items:center;

    a {
      margin-left: 16px;

      &.active::before{
        content: "";
        top: -26px;
        left: 13px;
        transform: rotate(90deg);
      }

      &:not(:first-child){
        margin-top: 0px;
      }
    }
   }
  }
`;