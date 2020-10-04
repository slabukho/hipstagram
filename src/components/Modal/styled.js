import styled from 'styled-components'


export const ModalStyled = styled.div`
    position: fixed;
    left: 0;
    height: calc(100vh - 60px);
    width: 100vw;
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
        top: 35px;
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
                justify-content: center;
                border-bottom: ${props => props.theme.border};
                position: relative;
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
                    }
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
 &>div{
    display:flex;
    width:100%;
    justify-content: center;
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
    &>input{
        width:100%;
        background: transparent;
        border: none;
        color:${props => props.theme.textColor};
        ::placeholder { color: ${props => props.theme.textColor}; }
    }
    &>p{
        position: absolute;
        color:${props => props.theme.linkColor};
        right:25px;
        top:0;
        cursor: pointer;

    }
`;
