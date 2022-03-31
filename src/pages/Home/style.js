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
    font-size: 23px;
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
    width: 54px;
    height: 54px;   
`

export const User__info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 13px;
`

export const User__name = styled.div`
    font-size: 13px;
    color: whitesmoke;
`

export const User__gmail = styled.div`
    font-size: 13px;
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
        height: 35px;
        padding: 0 20px;
        text-decoration: none;
        font-size: 13px;
        color: white;
    }
` 

export const Right = styled.div`
    position: relative;
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
    margin-right: 15px;
    width: 20px;
    height: 100%;
`

export const SignUp = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 100px;
    height: 28px;
    margin-right: 10px;
    transition: all .2s ease;
    font-size: 12px;
    background-color: transparent;
    border: 1.5px solid #4AC9D8;
    color: white;
    :hover{
        transform: scale(1.02);
        background-color: #4AC9D8;
        border: none;
    }
    :active{
        transform: scale(1);
    }
`

export const Points = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 35px;
    font-size: 20px;
    margin-right: 7px;
    border-radius: 50%;
    width: 35px;
    
    background-color: ${({flex}) => flex ? 'rgba(53,54,58,0.6)' : 'transparent'};
    
    :hover{
        background-color: rgba(53,54,58,0.4);
    }
    
    
`

export const Circle = styled.div`
    width: 3.5px;
    height: 3.5px;
    border-radius: 50%;
    background-color: white;
    margin: 2px 0;
    
`

export const Setting__Container = styled.div`
    position: absolute;
    top: 50px;
    right: 10px;
    display: ${({flex})=>flex?'flex':'none'};
    flex-direction: column;
    width: 200px;
    z-index: 100;
    background-color: #131313;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    overflow: hidden;
`

export const Setting__item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 13px;
    width: 100%;
    height: 35px;
    color: whitesmoke;
    :hover{
        background-color: rgba(26, 26, 26, 0.8);
        
    }
`