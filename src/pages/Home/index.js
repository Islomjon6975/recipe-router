
import React, { useEffect } from 'react'
import { Body, Container, Left, Logo, Nav, Navbar, Right, Setting, User, User__gmail, User__info, User__name, Wrapper } from './style'
import user from '../../assets/user.png'
import {sidebar} from '../../utils/sidebar'
import { NavLink, Outlet } from 'react-router-dom'

export const Home = () => {
    
  return (
    <Container>
        <Left>
            <Logo>Dashboard.</Logo>
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
                <Setting />
            </Navbar>
            <Body>
                <Outlet />
            </Body>
        </Right>
    </Container>
  )
}
