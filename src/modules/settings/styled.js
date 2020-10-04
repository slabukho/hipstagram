import styled from 'styled-components'

export const StyledSettings = styled.main`
        width: 60vw;
        min-height: calc(100vh - 60px);
        margin: 0 auto;
        background-color: ${props => props.theme.bgInner};
        display: flex;
        flex-direction: column;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        text-align: center;
        display:flex;
        flex-direction:column;
        align-items:center;
        &>hr{
            width:100%;
            margin:30px 0;
        }
        &>div{
            margin-top:20px;
            &>a{
             color: ${props => props.theme.linkColor};
                margin: 3vw;
                }
        }
`;

export const SliderSwitchTheme = styled.label`
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
        &>span{
            position: absolute;
            cursor: pointer;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: ${props => props.theme.bgColor};
            -webkit-transition: .4s;
            transition: .4s;
            border-radius: 34px;
            &::before{
                position: absolute;
                content: "";
                height: 26px;
                width: 26px;
                left: ${props => props.theme.sliderPosition};
                bottom: 4px;
                background-color: ${props => props.theme.textColor};
                -webkit-transition: .4s;
                transition: .4s;
                border-radius: 50%;
            }
        }

`;

export const StyledUserChangeForm = styled.form.attrs(props => ({
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
            width:150px;
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
export const StyledPasswordChangeForm = styled.form.attrs(props => ({
    onSubmit: props.onSubmit
    ,
}))`
    display: flex;
    flex-direction: column;
    &>p{
        color:red;
    }
    & > button {
        margin: 50px auto;
        position:relative;
        & > img{
            position:absolute;
            width:150px;
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
