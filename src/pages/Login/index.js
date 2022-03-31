
  import React, { useEffect, useState } from 'react'
  import { Button__login, Container, DOYOU, Input, Login__container, Login__des, LOGIN__SIGNUP, Title,  } from './style'
  import { toast } from 'react-toastify';
  import { createRef } from 'react'
import { useNavigate } from 'react-router-dom';

  export const Login = () => {
    const [state, setState] = useState(false)
    const [logout, setLogout] = useState(false)
    const inputRef = createRef()
    const navigate = useNavigate()

    useEffect(()=>{
      inputRef.current.focus()
    }, [inputRef])


    return (
      <Container>
        <LOGIN__SIGNUP>
          <Login__container>
            <Title>Login</Title>
            <Input ref={inputRef} type='text' placeholder='Username' />
            <Input type='email' placeholder='Email' />
            <Button__login>Login</Button__login>
            <Login__des> Do you have have an account ? <DOYOU onClick={()=>navigate('/sign-up')} > Sign Up</DOYOU></Login__des>
          </Login__container>
        </LOGIN__SIGNUP>
      </Container>
    )
  }
