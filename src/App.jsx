import { useState } from 'react'
import Card from './components/card/Card'
import Form from './components/Form/Form'
import { DivApp } from './styles/app/AppStyles'

function App() {

  return (
    <DivApp >
      <h3>Carga de Estudiantes</h3>
      <Form/>
      <Card/>
    </DivApp>
  )
}

export default App
