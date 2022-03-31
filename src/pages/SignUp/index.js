
  import React, { useContext, useEffect, useState } from 'react'
  import { Button__login,Container, DOYOU, Input, Login__container, Login__des, LOGIN__SIGNUP, Title} from './style'
  import { toast } from 'react-toastify';
  import { createRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { SignUpContext } from '../../context/signup';

  export const SignUp = () => {
    const [state, setState] = useState(false)
    const [logout, setLogout] = useState(false)
    const inputRef = createRef()
    const navigate = useNavigate()
    const [signup, setSignUp] = useContext(SignUpContext);
    const [user, setUser] = useState({
      name: '',
      surname: '',
      username: '',
      email: '',
    });


    const onChange = (e) => {
      const {value, name} = e.target;
      setUser({[name]: value})
    }

    console.log(user)


    return (
      <Container>
        <LOGIN__SIGNUP>
          <Login__container>
            <Title>Sign Up</Title>
            <Input name='name' onChange={onChange} type='text' placeholder='Name' />
            <Input name='surname' onChange={onChange} type='text' placeholder='Surname' />
            <Input name='username' onChange={onChange} type='text' placeholder='Username' />
            <Input name='email' onChange={onChange} type='email' placeholder='Email' />
            <Button__login>Login</Button__login>
            <Login__des>Do you have an account ? <DOYOU  onClick={()=>navigate('/login')} > Login</DOYOU></Login__des>
          </Login__container>
        </LOGIN__SIGNUP>
      </Container>
    )
  }
