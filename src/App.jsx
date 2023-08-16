import { useState } from 'react'
import Card from './components/card/Card'
import Form from './components/Form/Form'
import { DivApp } from './styles/app/AppStyles'


function App() {

  const [music, setMusic] = useState({
    nameArtist: '',
    album: '',
    year: '',
    form: false,
  });

  return (
    <DivApp >
      <h3>Carga de Estudiantes</h3>
      <Form/>
    </DivApp>
  )
}

export default App
