import styled from 'styled-components'



export const UsersStyled = styled.section`
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
`;

export const UserSerchStyled = styled.div`
            width: 50vw;
            height: 90px;
            color:${props => props.theme.textColor};
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: ${props => props.theme.bgInner};
            border: ${props => props.theme.border};
            box-sizing: border-box;
            border-radius: 10px;
            margin: 0 auto;
            margin: 15px auto;
            &>button{
                    width:15vw;
                    margin-right:15px;
            }
`;



export const UserSerchInnerStyled = styled.div`
            display: flex;
            justify-content: space-between;
            width: 8vw;
            margin: 30px;
            &>a{
                    margin-left:20px;
                    color:${props => props.theme.textColor};
                    text-decoration: none;
            &>img{
                width: 70px;
                border-radius: 100px;
                box-shadow: 0 0 7px #666;
                cursor: pointer;
            }
            &>p{
                    cursor: pointer;
                    margin-left:40px;
            }
        }
`;




export const NoUsersStyled = styled.div`
            height:calc(100vh - 60px)  ;
            width: 100vw;
            background-color:  ${props => props.theme.bgColor};
            align-self: center;
            ${props => props.theme.font};
            font-weight: bold;
            font-size: 48px;
            line-height: 56px;
            color: ${props => props.theme.textColor};
`;



export const NoUsersInnerStyled = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-self: center;
        height: 300px;
        margin: auto;
        padding-top: 25vh;
`;




