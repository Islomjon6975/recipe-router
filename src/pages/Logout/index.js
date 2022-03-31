
  import React, { useEffect, useState } from 'react'
  import { Btns, Button, Button__login, Cancel, Container, DOYOU, Input, Login__container, Login__des, LOGIN__SIGNUP, OK, Title, Warning, Warning__Title, Wrapper } from './style'
  import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

  export const Logout = () => {
    const [state, setState] = useState(false)
    const [logout, setLogout] = useState(false)

    const navigate = useNavigate()


    const onLogout = () => {
      setState(true)
    }

    const onCancel = () => {
      setState(false)
    }

    const onOk = () => {
      toast.error('Logged out')
      setState(false)
      setLogout(true)
      navigate('/login')
      localStorage.clear()
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
          <Button onClick={onLogout}>Log out</Button>
          </Wrapper>
      </Container>
    )
  }
