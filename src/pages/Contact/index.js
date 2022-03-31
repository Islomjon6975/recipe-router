
import React, { useEffect } from 'react'
import { Button, Container, Input, Title, Wrapper } from './style'
import { createRef } from 'react'

export const Contact = () => {
  const inputRef = createRef()

  useEffect(()=>{
    inputRef.current.focus()
  }, [inputRef])

  return (
    <Container>
      <Wrapper>
        <Title>Contact us</Title>
        <Input ref={inputRef} type='text' placeholder='Name' />
        <Input type='text' placeholder='Surname' />
        <Input type='email' placeholder='Email' />
        <Button>Send</Button>
      </Wrapper>
    </Container>
  )
}
