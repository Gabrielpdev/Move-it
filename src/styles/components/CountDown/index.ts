import styled from 'styled-components';

export const CountDownContainer = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Rajdhani';
  font-weight: 600;
  color: ${({ theme }) => theme.colors.titleTimer};

  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: ${({ theme }) => theme.colors.backgroundLight};
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    span:first-child {
      border-right: 1px solid #f0f2f3;
    }
    span:last-child {
      border-left: 1px solid #f0f2f3;
    }

    span {
      flex: 1;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0 0.5rem;
  } 
`;

export const CountDownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};

  font-size: 1.5rem;
  font-weight: 600;

  transition: background-color 0.2s ease;

  &:hover{
    background: ${({ theme }) => theme.colors.blueDark}
  }
`;


export const StopCountDownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  color: ${({ theme }) => theme.colors.titleButton};

  font-size: 1.5rem;
  font-weight: 600;

  transition: background-color 0.2s ease;

  &:hover{
    background: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const FinishedCountDownButton = styled.button`
  width: 100%;
  height: 5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-bottom: 5px solid ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.titleButton};

  font-size: 1.5rem;
  font-weight: 600;

  cursor: default;
`;