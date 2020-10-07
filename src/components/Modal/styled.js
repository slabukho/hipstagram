import styled from 'styled-components'


export const ModalStyled = styled.div`
    z-index:100;
    position: fixed;
    left: 0;
    top:0;
    height: calc(100vh - 60px);
    width: 100vw;
    height:100vh;
    background-color: rgba(0, 0, 0, 0.5);
    color:${props => props.theme.textColor};
    &>div{
        width: 40vw;
        height: 27vw;
        background-color: ${props => props.theme.bgInner};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
    }
    &>span{
        position: absolute;
        top: 85px;
        right: 100px;
        width: 55px;
        height: 55px;
        cursor: pointer;
        border: ${props => props.theme.border};
        border-radius: 50%;
        &::before,::after{
            content: "";
            position: absolute;
            top: 25px;
            left: 13.5px;
            width: 26px;
            height: 4px;
            background: ${props => props.theme.textColor};
        };
        &:hover{
            background: ${props => props.theme.bgColor};
            }
        &::before{
                transform: rotate(45deg);
        }
        &::after{
                transform: rotate(-45deg);
        }
        
    }
    
`;



export const OpenImage = styled.div.attrs({
    onClick: props => props.onClick
})`
            height: 27vw;
            width: 27vw;
            overflow: hidden;
            position: relative;
            
        &>img{
            width: 100%;
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%, -50%);
        }
 `;

export const InfoOpenImage = styled.div`
             display: flex;
             flex-direction: column;
             justify-content: space-between;
             width: 300px;
             &>div{
                 width:100%;
                 left: 0;
                 margin: 0;
                 padding-bottom: 5px;
             }
`;


export const UserInfoOpen = styled.div`
                display: flex;
                flex-direction:column;
                justify-content: center;
                border-bottom: ${props => props.theme.border};
                position: relative;
                &>p{
                        margin-left:10px;
                    }
                &>div{

                    display:flex;
                    &>p{
                        margin-left:70px;
                    }
                &>div{
                    height: 50px;
                    width: 50px;
                    overflow: hidden;
                    border-radius: 100px;
                    position: absolute;
                    left:10px;
                    top:2.5px;
                    &>img{
                        width: 60px;
                    }}

                }
                &>span{
                    position: absolute;
                    right: 20px;
                    top:50%;
                    transform: translateY(-50%);
                    cursor: pointer;    

                }
`;

export const OpenComments = styled.div`
overflow: auto;
height:350px;
padding-top:10px;
display:flex;
flex-direction: column;
 &>div{
    display:flex;
    flex-direction:column;
    width:100%;
    min-height:80px;
    &>p{
        width: calc(100% - 70px);
        margin: 0 10px;
    } 
    &>div{
                    height: 40px;
                    width: 40px;
                    overflow: hidden;
                    border-radius: 100px;
                    &>img{
                        width: 50px;
                    }
                }
                }

`;

export const CommentStyled = styled.div`
    position: relative;
     &>div{
            display:flex;
            height: 50px;
            width: 50px;
            overflow: hidden;
            border-radius: 100px;
            position: absolute;
            left:10px;
            top:2.5px;

            &>div{

                &>img{
                position: absolute;
                left:0;
                width: 40px;
        }}}
        &>b{
                    position: absolute;
                    left:60px;
                    top:15px;
                    &>img{
                        width:15px;
                        position: absolute;
                        cursor: pointer;
                        left:250%;
                    }
                }
        &>p{
                    position: absolute;
                    left:50px;
                    top:50px;
                }
`;

export const LikesOpen = styled.div`
                 margin-top:20px;
                 border-top: ${props => props.theme.border};
                 border-bottom: ${props => props.theme.border};
                 height:40px;
                 position: relative;
                 &>span{
                        position: absolute;
                        top:50%;
                        left:10px;
                        transform:translateY(-50%);

                    &>img{
                     cursor: pointer;
                     margin:5px;
                     width:20px;
                 }
                 }
                 &>p{
                    position: absolute;
                        top:25%;
                        left:90px;
                        transform:translateY(-75%);
                 }

`;

export const AddComments = styled.div`
    border:none;
    margin:0 ;
    padding:0;
    position: relative;
    &>form{
    &>textarea{
        width:80%;
        background: transparent;
        border: none;
        resize:none;
        color:${props => props.theme.textColor};
        ::placeholder { color: ${props => props.theme.textColor}; }
    }
    &>button{
        position: absolute;
        color:${props => props.theme.linkColor};
        right:-10px;
        top:-50%;
        cursor: pointer;
        background-color: inherit;
        padding: 14px 28px;
        font-size: 16px;
        cursor: pointer;
        display: inline-block;
        border:none;
    }
    }
`;


export const ContainerNewAva = styled.section`
        margin:  auto;
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

export const StyledFormNewAva = styled.form.attrs(props => ({
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
      
`;

export const StyledFormNewPost = styled(StyledFormNewAva)`
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
`


