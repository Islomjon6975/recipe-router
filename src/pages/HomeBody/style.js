import styled from 'styled-components'

export const Container = styled.div`
    
`

export const Title = styled.div`
    font-size: 23px;
    font-weight: 700;
    color: whitesmoke;
`

export const Search = styled.input`
    width: 100%;
    height: 34px;
    border-radius: 5px;
    background-color: #131313;
    margin-top: 15px;
    margin-bottom: 20px;
    outline: none;
    border: none;
    padding: 0 15px;
    color: whitesmoke;
    box-sizing: border-box;
`
export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    box-sizing: border-box;
`

export const Card = styled.div`
    width: 202px;
    height: 275px;
    background: #131313;
`

export const Card__img__container = styled.div`
    width: 100%;
    height: 100px;
    background-color: red;
    box-sizing: border-box;
    overflow: hidden;
`

export const Card__img = styled.img`
    width: 100%;
`

export const Card__User__Info = styled.div`
    display: flex;
    
`

export const Card__User__img = styled.img`
    width: 35px;
    height: 35px;
`

export const User__info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 8px;
`

export const User__name = styled.div`
    font-size: 10px;
    color: whitesmoke;
`

export const User__gmail = styled.div`
    font-size: 10px;
    color: #4E929D;
`

export const Card__info__container = styled.div`
    width: 100%;
    padding: 0 13px;
    padding-top: 10px;
`

export const Card__title = styled.div`
    font-size: 15px;
    color: #4E929D;
    margin-top: 6px;
    font-weight: 700;

`

export const Card__description = styled.div`
    font-size: 10px;
    width: 93%;
    color: whitesmoke;

`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 30px;
    background-color: #47BBC8;
    font-size: 12px;
    color: whitesmoke;
    border-radius: 4px;
    margin-top: 8px;
`