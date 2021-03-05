import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }

  > div{
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.grayLine};
    margin: 0 1.5rem;
    position: relative;

    div {
      height: 4px;
      width:0;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.green};
    }

    span {
      position: absolute;
      width: max-content;
      top: 12px;
      transform: translateX( -50% );
    }
  }

  @media (max-width: 800px){
    margin-top: 4rem;
  }
`;