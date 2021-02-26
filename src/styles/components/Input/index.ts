import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isLoading: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  input {
    border: 0;
    background: linear-gradient( 90deg, ${({theme}) => theme.colors.inputBackground} 0%, ${({theme}) => theme.colors.inputBackgroundFinish} 100%);
    font-size: 1.3rem;
    padding: 1.65rem;

    border-radius: 5px 0px 0px 5px;

    color: ${({theme}) => theme.colors.white};
    border: 1.5px solid transparent;

    /* outline-width: 0; */
    outline-color: ${({ theme }) => theme.colors.inputBackground};

    &:hover{
      border: 1.5px solid ${({ theme }) => theme.colors.inputBackground}; 
    }
   
    &::placeholder{
      color: ${({theme}) => theme.colors.white};
      opacity: 0.5;
    }
  }

  button {
    display: flex;
    align-items:center;
    justify-content: center;
    border: 1.5px solid ${({ theme }) => theme.colors.inputBackground};
    outline-color: ${({ theme }) => theme.colors.inputBackground};

    padding: 1.66rem;
    font-size: 2rem;
    background: ${({ theme }) => theme.colors.inputBackground};
    color: ${({theme}) => theme.colors.white };
    border-radius: 0px 5px 5px 0px;

    svg {
      width: 1.5rem;
      height: 1.5rem;
      ${(props) =>
      props.isLoading &&

      css`
       @keyframes Rote {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
        animation: Rote 1s infinite;
      `}
    }

    ${(props) =>
      props.isFilled &&
      css`
        border: 1.5px solid ${({ theme }) => theme.colors.green};
        background: ${({ theme }) => theme.colors.green};
      `}
  }

  @media (max-width: 520px){
    input {
      width: 78%;
    }
  }
`;