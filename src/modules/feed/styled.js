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
`;

export const PostStyled = styled.div`
        width:30vw;
        &>img{
            width:100%;
        }
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
`;

export const TopBorder = styled.hr`
    width:100%;
    height: 30px;
    border-style: solid;
    border-color: ${props => props.theme.background};
    border-width: 1px 0 0 0;
    border-radius: 20px;
`;

export const BottomBorder = styled.hr`
    width:100%;
    display: block;
    content: "";
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-color: ${props => props.theme.background};
    border-width: 0 0 1px 0;
    border-radius: 20px;
    margin-bottom:80px;

`;