
  import React, { useState } from 'react'
  import { Btns, Button, Cancel, Container, OK, Warning, Warning__Title, Wrapper } from './style'
  import { toast } from 'react-toastify';

  export const Logout = () => {
    const [state, setState] = useState(false)

    const MouseEnter = () => {
      // toast.error('Do you want to Log out of this website...?')
    }

    const onLogout = () => {
      // toast.success('Logged Out')
      setState(true)
    }

    const onCancel = () => {
      setState(false)
    }

    const onOk = () => {
      toast.error('Logged out')
      setState(false)

    }

    return (
      <Container>
        <Wrapper>
          <Warning flex={state}>
            <Warning__Title>Do you want to log out of this website...?</Warning__Title>
            <Btns>
              <OK onClick={onOk}>ok</OK>
              <Cancel onClick={onCancel}>cancel</Cancel>
            </Btns>
          </Warning>
          <Button onClick={onLogout} onMouseEnter={MouseEnter}>Log out</Button>
          </Wrapper>
      </Container>
    )
  }
