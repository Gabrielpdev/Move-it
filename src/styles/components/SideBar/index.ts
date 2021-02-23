import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  left: 0;
  top: 0;

  height: 100vh;
  width: 30px;
  padding: 25px;

  background: ${({ theme }) => theme.colors.backgroundLight};

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
`;