import styled from 'styled-components'



export const ContainerNewPostStyled = styled.section`
        width: 60vw;
        min-height: calc(100vh - 60px);
        margin: 0 auto;
        background-color: ${props => props.theme.bgInner};
        display: flex;
        flex-direction: column;
        align-items:center;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        text-align: center;
`;

export const StyledFormNewPost = styled.form.attrs(props => ({
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
          align-self:center;
          &>label{
            width: 180px;
            height: 50px;
            border-radius: 4px;
            text-align: center;
            margin: 25px;
            cursor: pointer;
            display: block;
            font: 14px/50px Tahoma;
            transition: all 0.18s ease-in-out;
            border: 1px solid #4FD666;
            background: linear-gradient(to top right, #3EC97A, #69EA49 20%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0)) top right/500% 500%;
            color: #4FD666;
            &:hover{
                color: white;
                background-position: bottom left;
            }
          }
          &>input{
            width: 0.1px;
            height: 0.1px;
            opacity: 0;
            overflow: hidden;
            position: absolute;
            z-index: -1;
          }
        &>{
          color:${props => props.theme.textColor};
          }
          &>p{
              color:red;
          }
          
      }
      &>textarea{
        padding:15px;
        margin: 0 auto ; 
        width:400px;
        border:none ;
        font-size:20px;
        font-family:'Montserrat Alternates';
        border-radius:10px;outline:none;
        transition: box-shadow .3s ease;
        &:hover{box-shadow:0px 0px 13px 0px ${props => props.theme.background}} 
      }
      
`;