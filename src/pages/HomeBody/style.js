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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    
`

export const Card = styled.div`
    border-radius: 3px;
    height: 300px;
    background: #131313;
    box-sizing: border-box;
    overflow: hidden;
`


export const Card__img__container = styled.div`
    width: 100%;
    height: 120px;
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
    padding: 0 10px;
`

export const User__name = styled.div`
    font-size: 10px;
    color: whitesmoke;
    margin-bottom: 3px;
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
    font-weight: 700;
    margin: 8px 0;

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
    width: 90px;
    height: 25px;
    background-color: #47BBC8;
    font-size: 10px;
    color: whitesmoke;
    border-radius: 4px;
    margin-top: 13px;
    margin-left: auto;
    margin-right: 25px;
    cursor: pointer;
    transition: all .4s ease;
    :hover{
        transform: scale(0.98);
    }
`