import styled from 'styled-components'

export const ContainerFeedStyled = styled.section`
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 60vw;
            min-height:calc(100vh - 60px);
            margin: 0 auto;
            background-color:${props => props.theme.bgInner};
            position: relative;
            color:${props => props.theme.textColor};
            &>img{
                margin:auto;
            }
`;

export const PostStyled = styled.div`
        margin-top:4vh;
        width:30vw;
        border:${props => props.theme.border};
        border-radius: 15px;
        &>img{
            width:100%;
            border-radius: 15px 15px 0 0 ;
            cursor: pointer;
        }
        &>div{
            margin-top:10px;
            padding:0 20px;
        &>div{
            display:flex;
            align-items:center;
            &>img{
                margin-right:20px;
                width:20px;
                height:20px;
            cursor: pointer;
           
        }
        &>b{
                margin-left:5px;
            }
            &>p{
                margin-left:5px;
            }
        }
    }
`;



export const ContainerNoPosts = styled.div`
        height: calc(100vh - 60px);
        position: relative;
        &>img{
            width:50vh;
            position: absolute;
            top:50%;
            left:50%;
            transform:translate(-50%,-50%)
        }
        &>b{
            font-size:40px;
            position: absolute;
            top:70%;
            left:50%;
            transform:translate(-50%,0)

        }

`;