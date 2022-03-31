
  import React, { useContext, useEffect, useState } from 'react'
  import { Button__login, Container, DOYOU, Input, Login__container, Login__des, LOGIN__SIGNUP, Title,  } from './style'
  import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { SignUpContext } from '../../context/signup';

  export const Login = () => {
    const [state, setState] = useState(false)
    const [logout, setLogout] = useState(false)
    const navigate = useNavigate()
    const [signup, setSignUp] = useContext(SignUpContext)
    const [login, setLogin] = useState({
      email:'',
      password: '',
    })

    const onChange = (e) => {
      const {value, name} = e.target
      setLogin({...login, [name]: value})
    }

    const onLogin = () => {
      if(login.email === login.email && login.password === signup.password){
        localStorage.setItem('token', 'fdsafjlkrlarjlksjglkjar23j44lafl')
      }
    }
    

    return (
      <Container>
        <LOGIN__SIGNUP>
          <Login__container>
            <Title>Login</Title>
            <Input name='email' onChange={onChange}  type='email' placeholder='Email' />
            <Input name='password' onChange={onChange}  type='password' placeholder='Password' />
            <Button__login onClick={onLogin}>Login</Button__login>
            <Login__des> Do you have have an account ? <DOYOU onClick={()=>navigate('/sign-up')} > Sign Up</DOYOU></Login__des>
          </Login__container>
        </LOGIN__SIGNUP>
      </Container>
    )
  }
