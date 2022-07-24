import React from 'react'
import { GlobalStyles } from './styles/GlobalStyles'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<h1>Sitio en Construcción</h1>} />

        <Route path='*' element={<h1>Error 404: Este sitio no fue encontrado</h1>} />
      </Routes>
    </>
  )
}

export default App
