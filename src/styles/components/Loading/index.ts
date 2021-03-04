import styled, { css } from 'styled-components';

export const Container = styled.div`
 @keyframes teste{
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: 195px 0%;
    }
  };
  
  table{
    width: 960px;
    border-spacing: 0 8px;
    border-radius: 5px;

    div, span, img, strong{
      background: linear-gradient(
        -90deg,
        ${({theme}) => theme.colors.background },
        ${({theme}) => theme.colors.backgroundLight }, 
        ${({theme}) => theme.colors.background }
      );
      animation: teste 1.2s ease-in-out infinite;
    }

    .separator{
      height: 24px;
    }
      
    thead{
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 17px;
      text-transform: uppercase;
      color: ${({theme}) => theme.colors.text };
      opacity: 0.5;
    }

    tbody{
      margin-top: 24px;
      background: ${({theme}) => theme.colors.backgroundLight };
      border-radius: 5px;

      tr{
        border-radius: 5px;
      }

      th {
        padding: 16px 24px;

        &:first-child{
          padding: 10px;
          position: relative;
          &::before{
            top: 40%;
            left: 20%;
            margin: auto;
            animation: teste 1.2s ease-in-out infinite;
            content:"";
            height: 20px;
            width: 50px;
            display: flex;
            position: absolute;
            background: linear-gradient(
              -90deg,
              ${({theme}) => theme.colors.background },
              ${({theme}) => theme.colors.backgroundLight }, 
              ${({theme}) => theme.colors.background }
            );
          }
        }

        > span{
          position:relative;
          &::before{
            animation: teste 1.2s ease-in-out infinite;
            content:"";
            height: 20px;
            width: 100px;
            display: flex;
            position: absolute;
            background: linear-gradient(
              -90deg,
              ${({theme}) => theme.colors.background },
              ${({theme}) => theme.colors.backgroundLight }, 
              ${({theme}) => theme.colors.background }
            );
          }
        }

        &:first-child {
          border-radius: 5px 0px 0px 5px;
          border-right: 2px solid ${({theme}) => theme.colors.background };
        }

        &:last-child {
          border-radius: 0px 5px 5px 0px;
        }

        &:nth-child(2) {
          display: flex;
          align-items: center;
          justify-content:center;

          > div:first-child {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            margin-right: 16px;
          }

          > div{
            display: flex;
            flex-direction: column;
            margin-right: auto;

            strong {
              position: relative;
              &::before{
                animation: teste 1.2s ease-in-out infinite;
                content:"";
                height: 20px;
                width: 200px;
                display: flex;
                position: absolute;
                background: linear-gradient(
                  -90deg,
                  ${({theme}) => theme.colors.background },
                  ${({theme}) => theme.colors.backgroundLight }, 
                  ${({theme}) => theme.colors.background }
                );
              }
            }
          }
        }
      }
    }
  }

  @media (max-width: 800px){    
    
  }
`;