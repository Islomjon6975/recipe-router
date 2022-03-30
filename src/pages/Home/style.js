import styled from 'styled-components'


export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #0B0B0B;
    color: red;
`

export const Left = styled.div`
    width: 20%;
    height: 100%;
    background:#131313;
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
    color: whitesmoke;
    font-weight: 700;
    padding: 0 20px;
    height: 50px;

`

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
    margin-top: 20px;
`

export const User = styled.img`
    width: 50px;
    height: 50px;   
`

export const User__info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 13px;
`

export const User__name = styled.div`
    font-size: 12px;
    color: whitesmoke;
`

export const User__gmail = styled.div`
    font-size: 12px;
    color: #4E929D;
`

export const Nav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    margin-top: 15px;
    .navlink{
        display: flex;
        align-items: center;
        height: 30px;
        border: 1px solid black;
        padding: 0 20px;
        text-decoration: none;
        font-size: 13px;
        color: white;
    }
` 

export const Right = styled.div`
    width: 80%;
    height: 100%;
    background-color: transparent;
`

export const Navbar = styled.div`
    width: 100%;
    height: 50px;
    background-color: #131313;
`

export const Body = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    padding: 30px;
    box-sizing: border-box;
`