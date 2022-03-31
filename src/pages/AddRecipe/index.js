
import React, { useContext, useState } from 'react'
import { Container, Description, Image, Image__container, Image__text, Ingredients, Left, Name, Notes, Publish, Right, Title, Wrapper } from './style'
import { RecipeContext } from '../../context/recipesContext'


export const AddRecipe = () => {
  const [state, setState] = useState({})
  const [recipe, setRecipe] = useContext(RecipeContext)

  const onChange = (e) => {
    const {value, name} = e.target
      setState({...state, [name]: value})
  }

  const onPublish = () => {
    setRecipe([...recipe, {
        id: recipe.length + 1, 
        userName: 'Tomson', 
        email: 'tomson@gmail.com', 
        title: state.name, 
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing consectetur adipiscing elit, sed do eiusmod tempor incididunt',
        btn: 'View more',
        img: state.img,
      }])
    setState({
      name: '',
      ingredients: '',
      description: '',
      notes: ''
    })
  }
  return (
    <Container>
      <Title>Add a recipe</Title>
      <Wrapper>
        <Left>
          <Name value={state.name} name='name' onChange={onChange} placeholder='Name of the recipe'/>
          <Ingredients value={state.ingredients} name='ingredients' onChange={onChange}  placeholder='Ingredients' />
          <Description value={state.description} name='description' onChange={onChange} placeholder='Recipe description and how to make it' />
        </Left>
        <Right>
          <Image__container>
            <Image__text>Add an image</Image__text>
            <Image__text>Drag and drop an image</Image__text>
            <Image__text>or</Image__text>
            <Image__text><Image  name='img' onChange={onChange} accept=".jpg, .jpeg, .png" type='file' /></Image__text>
          </Image__container>
          <Notes value={state.notes} name='notes' onChange={onChange} placeholder='Notes' />
          <Publish  onClick={onPublish}>Publish</Publish>
        </Right>
      </Wrapper>
    </Container>
  )
}
