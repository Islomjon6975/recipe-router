
import React from 'react'
import { Container } from './style'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { sidebar } from '../utils/sidebar'

export const Root = () => {
  return (
    <Router>
        <Container>
            <Routes>
                <Route element={<Home />}>
                    {
                        sidebar.map((item)=>(
                            <Route key={item.id} path={item.path} element={item.element} />
                        ))
                    }
                </Route>
            </Routes>
        </Container>
    </Router>
  )
}
