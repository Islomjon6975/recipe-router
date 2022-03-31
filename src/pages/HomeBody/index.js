
import React, { useContext, useState } from 'react'
import { Button, Card, Card__description, Card__img, Card__img__container, Card__info__container, Card__title, Card__User__img, Card__User__Info, Container, Right, Search, Title, User__gmail, User__info, User__name, Wrapper } from './style'
import img from '../../assets/user.png'
import food from '../../assets/food1.jpg'
import { RecipeContext } from '../../context/recipesContext'


export const HomeBody = () => {
  const [recipes, setRecipes] = useContext(RecipeContext)
  const [data, setData] = useState(recipes)

  const onSearch = (e) => {
    const res = recipes.filter((item) => item.title.toLowerCase().includes(e.target.value.toLowerCase()))
    setData(res)
  }

  return (
    <Container>
      <Title>Recipes</Title>
      <Search onChange={onSearch} placeholder='Search for a recipe' />
      <Wrapper>
        {data.map((item)=>(
        <Card key={item.id}>
          <Card__img__container>
            <Card__img src={item.img} />
          </Card__img__container>
          <Card__info__container>
            <Card__User__Info>
              <Card__User__img src={img} />
              <User__info>
                <User__name>{item.username}</User__name>
                <User__gmail>{item.email}</User__gmail>
              </User__info>
            </Card__User__Info>
            <Card__title>{item.title}</Card__title>
            <Card__description>{item.description}</Card__description>
            <Button>{item.btn}</Button>
          </Card__info__container>
        </Card>
        ))}
      </Wrapper>
    </Container>
  )
}
