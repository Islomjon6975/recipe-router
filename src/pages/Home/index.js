
import React, { useEffect, useState } from 'react'
import { Body, Circle, Container, Left, Logo, Nav, Navbar, Points, Right, Setting, Setting__Container, Setting__item, SignUp, User, User__gmail, User__info, User__name, Wrapper } from './style'
import user from '../../assets/user.png'
import {sidebar} from '../../utils/sidebar'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

export const Home = () => {
    const [state, setState] = useState(false)
    const navigate = useNavigate()

    const Setting__hover = () => {
        setState(!state)
    }

    const MouseLeave = () => {
        setState(false)
    }

    
  return (
    <Container>
        <Left>
            <Logo>Recipes.</Logo>
            <Wrapper>
                <User src={user} />
                <User__info>
                    <User__name>Lin</User__name>
                    <User__gmail>lin@gmail.com</User__gmail>
                </User__info>
            </Wrapper>
            <Nav>
            {
                sidebar.map((item)=>(
                    <NavLink 
                        key={item.id}
                        className='navlink' 
                        to={item.path}
                        style={({isActive})=>{
                            return{
                                backgroundColor: isActive ? '#4AC9D8' : 'transparent'
                            }
                        }}
                    >
                        {item.title}
                    </NavLink>
                ))
            }
            </Nav>
        </Left>
        <Right>
            <Navbar>
                <SignUp onClick={()=>navigate('/sign-up')}>Sign Up</SignUp>
                <Points flex={state}   onClick={Setting__hover}><Circle /><Circle /><Circle /></Points>
                <Setting__Container  flex={state}>
                    <Setting__item>Settings</Setting__item>
                    <Setting__item onClick={()=>navigate('/login')}>Login</Setting__item>
                    <Setting__item onClick={()=>navigate('/logout')}>Log out</Setting__item>
                    <Setting__item>Feedback</Setting__item>
                </Setting__Container>
            </Navbar>
            <Body>
                <Outlet />
            </Body>
        </Right>
    </Container>
  )
}
