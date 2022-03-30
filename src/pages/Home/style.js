import styled from 'styled-components'
import {ReactComponent as setting} from '../../assets/Shape.svg'

export const Container = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-color: #0B0B0B;
    color: red;
`

export const Left = styled.div`
    width: 230px;
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
        padding: 0 20px;
        text-decoration: none;
        font-size: 13px;
        color: white;
    }
` 

export const Right = styled.div`
    width: calc(100% - 230px);
    height: 100%;
    background-color: transparent;
`

export const Navbar = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #131313;
`

export const Body = styled.div`
    width: 100%;
    height: calc(100vh - 50px);
    padding:20px 40px 0 40px;
    box-sizing: border-box;
    overflow-y: auto;
    ::-webkit-scrollbar{
        width: 5px;
    }
    ::-webkit-scrollbar-track{
        background-color: #666;
        border-radius: 5px;
        box-shadow: inset 0 0 10px rgba(0,0,0,0.25);
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 5px;
        background-color: #888;
        
    }
`

export const Setting = styled(setting)`
    margin-right: 30px;
    width: 20px;
    height: 20px;
`