import { useState } from 'react'
import Card from '../card/Card'
import { FormSection } from '../../styles/form/FormStyles';

const Form = () => {
  const [artist, setArtist] = useState({
    nameArtist: '',
    album: '',
    year: '',
  });
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  const { nameArtist, album, year } = artist;

  const handleChange = ({ target }) => {
    setArtist({
      ...artist,
      [target.name]: target.value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
  };

  const validate = () => {
    if (nameArtist.trim() === '' || album.trim() === '' || year.trim() === '') {
      setError(true);
      setMessage('Todos los campos son obligatorios');
      return;
    }
    if (nameArtist.length < 3) {
      setError(true);
      setMessage('El nombre del artista debe tener al menos 3 caracteres');
      return;
    }
    if (album.length < 6) {
      setError(true);
      setMessage('El nombre del album debe tener al menos 6 caracteres');
      return;
    }
    setError(false);
    setMessage('Gracias por tu compra!!!');
    setShow(true);
  };

  const resetForm = () => {
    setArtist({
      nameArtist: '',
      album: '',
      year: '',
    });
    setShow(false);
    setError(false);
  };


  return (
    <div style={{ width: '100%' }}>
      <FormSection >
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Artista:</label>
          <input type="text" name='nameArtist' onChange={handleChange} value={nameArtist} />
          <label htmlFor="">Album</label>
          <input type="text" name='album' onChange={handleChange} value={album} />
          <label htmlFor="">Año</label>
          <input type="text" name='year' onChange={handleChange} value={year} />
          {show ? null : <button>Comprar</button>}
        </form>
      </FormSection>
      {error && <p style={{ textAlign: 'Center' }}>{message}</p>}
      {show && <>
        <h2 style={{ textAlign: 'Center' }}>{message}</h2>
        <Card {...artist} resetForm={resetForm} />
      </>
      }
    </div>
  )
}

export default Form