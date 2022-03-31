import styled from 'styled-components'

export const Container = styled.div`
    height: 100%;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
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



export const LOGIN__SIGNUP = styled.div`
    width: 400px;
    height: 300px;
`

export const Login__container = styled.div`
    width:400px;
    height: 300px;
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