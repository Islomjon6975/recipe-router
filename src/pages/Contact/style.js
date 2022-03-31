import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 100px;
`

export const Title = styled.div`
    font-size: 23px;
    font-weight: 700;
    color: whitesmoke;
    margin-bottom: 10px;
`

export const Wrapper = styled.div`
    width:350px;
    box-sizing: border-box;
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

export const Button = styled.div`
    background-color: #368A95;
    width: 100%;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 16px;
    color: black;

    transition: all .3s ease;
    :hover{
        transform: scale(0.98);
    }
`