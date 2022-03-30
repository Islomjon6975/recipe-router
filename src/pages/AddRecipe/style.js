import styled from 'styled-components'

export const Container = styled.div`
    color: white;
`

export const Title = styled.div`
    font-size: 23px;
    font-weight: 700;
    color: white;
`

export const Wrapper = styled.div`
    display: flex;
    margin-top: 20px;
`

export const Left = styled.div`
    width: 50%;
    padding-right: 20px;
    box-sizing: border-box;
`

export const Name = styled.input`
    width: 100%;
    height: 32px;
    border: none;
    outline: none;
    padding: 8px 15px;
    box-sizing: border-box;
    background-color: #131313;
    border-radius: 3px;
    font-size: 13px;
    color: white;
`

export const Ingredients = styled.textarea`
    width: 100%;
    height: 130px;
    margin-top: 15px;
    margin-bottom: 10px;
    border: none;
    outline: none;
    padding: 8px 15px;
    box-sizing: border-box;
    background-color: #131313;
    border-radius: 3px;
    font-size: 13px;
    color: white;
`

export const Description = styled.textarea`
    width: 100%;
    height: 180px;
    border: none;
    outline: none;
    padding: 8px 15px;
    box-sizing: border-box;
    background-color: #131313;
    border-radius: 3px;
    font-size: 13px;
    color: white;
`

export const Right = styled.div`
    width: 50%;
    box-sizing: border-box;
`

export const Image__container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 150px;
    background-color: #131313;
`

export const Image__text = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    color: white;
    opacity: 0.8;

`

export const Image = styled.input`
    width: 100%;
    padding: 0 110px;
    box-sizing: border-box;
`

export const Notes = styled.textarea`
    width: 100%;
    height: 150px;
    border: none;
    outline: none;
    padding: 8px 15px;
    box-sizing: border-box;
    background-color: #131313;
    border-radius: 3px;
    font-size: 13px;
    color: white;
    margin-top: 15px;

`

export const Publish = styled.div`
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