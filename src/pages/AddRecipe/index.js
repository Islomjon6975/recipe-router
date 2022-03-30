
import React from 'react'
import { Container, Description, Image, Image__container, Image__text, Ingredients, Left, Name, Notes, Publish, Right, Title, Wrapper } from './style'

export const AddRecipe = () => {
  return (
    <Container>
      <Title>Add a recipe</Title>
      <Wrapper>
        <Left>
          <Name placeholder='Name of the recipe'/>
          <Ingredients  placeholder='Ingredients' />
          <Description placeholder='Recipe description and how to make it' />
        </Left>
        <Right>
          <Image__container>
            <Image__text>Add an image</Image__text>
            <Image__text>Drag and drop an image</Image__text>
            <Image__text>or</Image__text>
            <Image__text><Image accept=".jpg, .jpeg, .png" type='file' /></Image__text>
          </Image__container>
          <Notes placeholder='Notes' />
          <Publish>Publish</Publish>
        </Right>
      </Wrapper>
    </Container>
  )
}
