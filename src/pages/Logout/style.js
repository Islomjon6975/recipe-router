import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Wrapper = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    height: 150px;
    position: relative;
`

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 35px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    background-color: crimson;
    transition: all .4s ease;
    :hover{
        transform: scale(0.99);
    }
    :active{
        transform: scale(0.97);
    }
`

export const Warning = styled.div`
    position: absolute;
    top: 0;
    z-index: 2;
    display: ${({flex}) => flex ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 350px;
    height: 150px;
    border-radius: 20px;
    background-color: #111;
    padding: 0 40px;
    box-sizing: border-box;
`

export const Warning__Title = styled.div`
    margin-top: 15px;
    font-size: 15px;
`

export const Btns = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 15px;
    height: 40px;
`

export const OK = styled.div`
    
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    padding: 0 15px;
    background-color: #0abef7;
    :active{
        background-color: #111;
        border: 1.5px solid #0abef7;
        
    }

`

export const Cancel = styled.div`
    
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    border-radius: 10px;
    padding: 0 15px;
    background-color: crimson;
    :active{
        background-color: #111;
        border: 1.5px solid crimson;
    }
`

export const LOGIN__SIGNUP = styled.div`
    width: 400px;
    height: 300px;
`

export const Login__container = styled.div`
    width:400px;
    height: 300px;
    border: 1px solid black;
`


export const Title = styled.div`
    font-size: 23px;
    font-weight: 700;
    color: whitesmoke;
    margin-bottom: 10px;
`

export const Input = styled.input`
    width: 100%;
    height: 35px;
    border: none;
    outline: none;
    border-radius: 3px;
    padding: 0 15px;
    background-color: #131313;
    margin: 12px 0;
    color: whitesmoke;
    box-sizing: border-box;
    transition: all .1s ease;
    :hover{
        transform: scale(1.01);
    }
`

export const Button__login = styled.div`
    background-color: #368A95;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
    color: black;
    color: #fff;
    transition: all .3s ease;
    :hover{
        transform: scale(0.98);
    }
`

export const Footer = styled.div`
    display: flex;
`

export const Login__des = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 15px;
    text-align: right;
    font-size: 12px;
`

export const DOYOU = styled.div`
    margin-left: 8px;
    color: #0cbcf4;
    font-size: 13px;
`