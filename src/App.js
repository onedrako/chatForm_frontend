import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes, Route } from 'react-router-dom'

import { HomeComponent } from './components/HomeComponent'
import HeaderComponent from './components/Header/HeaderComponent.jsx'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <HeaderComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='*' element={<h1>Error 404: Este sitio no fue encontrado</h1>} />
      </Routes>
    </>
  )
}

export default App
