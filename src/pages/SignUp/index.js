
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
      password: '',
      email: '',
    });


    const onChange = (e) => {
      const {value, name} = e.target;
      if(!(signup.email === user.email && signup.password === user.email)){

        setUser({...user, [name]: value})
      }
    }

    const signUp = () => {
      setSignUp(user)
      
      setUser({
        name: '',
        surname: '',
        password: '',
        email: '',
      })

      {
        signup.length && navigate('/login')
      }
      
    }



    return (
      <Container>
        <LOGIN__SIGNUP>
          <Login__container>
            <Title>Sign Up</Title>
            <Input value={user.name} name='name' onChange={onChange} type='text' placeholder='Name' />
            <Input value={user.surname} name='surname' onChange={onChange} type='text' placeholder='Surname' />
            <Input value={user.email} name='email' onChange={onChange} type='email' placeholder='Email' />
            <Input value={user.password} name='password' onChange={onChange} type='password' placeholder='Password' />
            <Button__login onClick={signUp}>Sign Up</Button__login>
            <Login__des>Do you have an account ? <DOYOU  onClick={()=>navigate('/login')} > Login</DOYOU></Login__des>
          </Login__container>
        </LOGIN__SIGNUP>
      </Container>
    )
  }
