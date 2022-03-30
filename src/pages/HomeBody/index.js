
import React from 'react'
import { Button, Card, Card__description, Card__img, Card__img__container, Card__info__container, Card__title, Card__User__img, Card__User__Info, Container, Right, Search, Title, User__gmail, User__info, User__name, Wrapper } from './style'
import img from '../../assets/user.png'
import food from '../../assets/food1.jpg'

export const HomeBody = () => {
  return (
    <Container>
      <Title>Recipes</Title>
      <Search placeholder='Search for a recipe' />
      <Wrapper>
        <Card>
          <Card__img__container>
            <Card__img src={food} />
          </Card__img__container>
          <Card__info__container>
            <Card__User__Info>
              <Card__User__img src={img} />
              <User__info>
                <User__name>Milos</User__name>
                <User__gmail>milos@gmail.com</User__gmail>
              </User__info>
            </Card__User__Info>
            <Card__title>Pizza</Card__title>
            <Card__description>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </Card__description>
            <Button>View more</Button>
          </Card__info__container>
        </Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </Wrapper>
    </Container>
  )
}
