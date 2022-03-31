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
    height: 40px;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 20px;
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