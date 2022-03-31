
import React from 'react'
import { Container } from './style'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { sidebar } from '../utils/sidebar'
import { ToastContainer } from 'react-toastify'
import { Login } from '../pages/Login'

export const Root = () => {
    // const navigate = useNavigate()
  return (
    <Router>
        <Container>
            <ToastContainer />
            <Routes>
                <Route element={<Home />}>
                    {
                        sidebar.map((item)=>{
                            
                                return <Route key={item.id} path={item.path} element={item.element} />
                            
                        })
                    }
                </Route>
            </Routes>
        </Container>
    </Router>
  )
}
