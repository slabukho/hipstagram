import styled from 'styled-components'
import user_icon from '../../imgs/user_icon 1.png'
import logout_icon from '../../imgs/logout_icon 1.png'
import search_icon from '../../imgs/Search_icon.png'
import search from '../../imgs/search.svg'


export const HeaderStyled = styled.header`
    display: flex;
    width: 100vw;
    height: 60px;
    background-color:${props => props.theme.background} ;
    position: relative;
    &>div{
            position: absolute;
            top:25%;
            left:85%;
        }
        &>input{
            width: 297px;
            height: 28.5px;
            background-size: 25px;
            font-size: 20px;
            padding: 5px 5px 5px 40px;
            position: absolute;
            opacity: 1;top: 50%;
            left: 35px;
            transform: translate(0, -50%);
            background: ${props => props.theme.input.color};
            border: ${props => props.theme.border};
            box-sizing: border-box;
            border-radius: 10px;
            outline:none;
            color:${props => props.theme.inputTextColor};
        }
`;

export const HeaderTextStyled = styled.p`
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 28px;
        text-align: center;
        color: ${props => props.theme.bgInner};
        margin: auto; 

`;

export const IconsCOntatiner = styled.span`
        position: absolute;
        top: 25%;
        right: 0;
        &>a{
            &>img{
            margin-right: 35px;
            cursor: pointer;
            width:30px;
        }
        }
        &>img{
            margin-right: 35px;
            cursor: pointer;
            width:30px;
        }
`;

export const UserIcon = styled.img.attrs({
    src: user_icon,
    alt: 'user_icon'
})`

`;


export const GoToSearch = styled.img.attrs({
    src: search,
    onClick: props => props.onClick,
})`
    width:40px;
    position: absolute;
    left:30px;
    top:50%; 
    transform: translateY(-50%);
    cursor: pointer;

`;

export const SearchIcon = styled(UserIcon).attrs({
    src: search_icon,
    alt: 'search_icon',
})`
        position: absolute;
        top: 50%;
        left: 40px;
        transform: translate(0, -50%);
        width: 25px;
`;





