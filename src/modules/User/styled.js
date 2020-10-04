import styled from 'styled-components'
import { StyledButton } from '../../components/button/styled'



export const ContainerUserStyled = styled.section`
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
            position: relative;
            margin: 30px 7vw;
            color:${props => props.theme.textColor};
            &>hr{
            width: 100%;
            }
`;

export const Preloader = styled.div`
    width:100vw;
    height:100vh;
    position: relative;
    &>img{
        width:45vw;
        position: absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%)
    }
`;

export const UserStyled = styled.section`
        width: 60vw;
        min-height: calc(100vh - 60px);
        margin: 0 auto;
        background-color: ${props => props.theme.bgInner};
        display: flex;
`;

export const HeaderUserStyled = styled.div`
            position: relative;
            width: 100%;
            height: 10vw;
            & > div{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                position: absolute;
                right: 0;
                & > p{
                            margin-left:6.5vw;
                            font-size:1vw;
                        }
                & > button{
                        width: 20vw;
                    }
                    & > span{
                        display: flex;
                        justify-content: space-between;
                        & > p{
                            margin:10px;
                            cursor: pointer;
                        }
                    }
            }
`;

export const FollowingButton = styled(StyledButton)`
    background-color:gray;
`;

export const Image = styled.div`
            margin :10px;
            width: calc(33.33332% - 20px);
            overflow: hidden;
            cursor: pointer;
            display:flex;
            align-items:center;
            justify-content:center;
            max-height:14vw;
            background:${props => props.theme.bgColor};
        &>img{
            width: 100%;
        }
 `

export const ImgAva = styled.div`
                width: 10vw;
                height: 10vw;
                overflow: hidden;
                border-radius: 100px;
                position: relative;
                left: 0;
                &>img{
                    position: absolute;
                    top:50%;
                    left:50%;
                    transform: translate(-50%,-50%);
                    width: 12vw;
                    pointer-events: none;
                }
                
`;


export const PuplicationsUser = styled.div`
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            &>p{
                font-size:2vw;
                margin:50px auto;
                }
`;

export const Plus = styled.div.attrs({
    onClick: props => props.onClick
})`
    width:50px;
    height:50px;
    position: absolute;
    border-radius:50px;
    top:320px;
    left:-80px;
    cursor: pointer;
    background:
        linear-gradient(${props => props.theme.textColor},${props => props.theme.textColor}),
        linear-gradient(${props => props.theme.textColor},${props => props.theme.textColor}),
        ${props => props.theme.bgColor};
    background-position:center;
    background-size: 50% 2px,2px 50%; /*thickness = 2px, length = 50% (25px)*/
    background-repeat:no-repeat;
`;