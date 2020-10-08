import styled from 'styled-components'
import img from '../../imgs/wpap.jpg'

export const FormStyled = styled.form.attrs(props => ({
    onSubmit: props.onSubmit
    ,
}))`
    display: flex;
    flex-direction: column;

    & > button {
        margin: 50px auto;
        position:relative;
        & > img{
            position:absolute;
            width:50px;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%)
      }
      }
      &>div{
        &>{
          color:${props => props.theme.textColor};
          }
      }
      
`;

export const AuthMain = styled.section`
    display: flex;
    background: ${props => props.theme.bgInner};

`;

export const AuthPicture = styled.img.attrs({
    src: img
})`

        min-height: 100vh;
        pointer-events: none;
`;

export const AuthStyled = styled.section`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;        
        margin: 0 auto;
        & > span {
            display: flex;
            align-items: center;
            align-self: center;
            & > h1{
                ${props => props.theme.font};
                font-weight: bold;
                font-size: 72px;
                color: ${props => props.theme.textColor};
            } 
        }
        & > p {
            ${props => props.theme.font};
            font-weight: normal;
            font-size: 24px;
            line-height: 28px;
            color: ${props => props.theme.textColor};
            & > a{
            color: ${props => props.theme.linkColor};
            
                }
         
        }
              
`;