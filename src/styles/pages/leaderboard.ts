import styled from 'styled-components';

export const Container = styled.nav`
  height: 100vh;
  width: 100vw;
  /* margin: 0 auto; */
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  
  background-color: ${({theme}) => theme.colors.background };

  section {
    max-width: 992px;
    margin: 0 auto;
    flex: 1;
    display: flex;
    align-content: center;
    justify-content:center;
    flex-direction: column;
    padding-left: 40px;

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
      color: ${({theme}) => theme.colors.titleButton };
      margin-bottom: 40px;
    }

    table{
      width: 960px;
      border-spacing: 0 8px;
      border-radius: 5px;

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

          >span{
            font-style: normal;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: ${({theme}) => theme.colors.hightLightTable };
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

            > img {
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
                font-style: normal;
                font-weight: 600;
                font-size: 20px;
                line-height: 24px;
                color: ${({theme}) => theme.colors.titleTimer };
              }

              div{
                display: flex;
                align-items: flex-start;
                justify-content: flex-start;
                margin-top: 8px;

                img{
                  margin-right: 10px
                }

                span{
                  font-style: normal;
                  font-weight: normal;
                  font-size: 1rem;
                  line-height: 19px;
                }
              }

            }
          }
        }
      }
    }
  } 
`;