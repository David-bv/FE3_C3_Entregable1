import React from 'react'
import { DivCard } from '../../styles/cards/CardStyles';

const Card = ({ nameArtist, album, year, resetForm }) => {

  const handleBack = () => {
    resetForm()
  };

  return (
    <DivCard style={{ borderRadius: '5px', border: '1px solid #248396', width: '35%', display: 'block', margin: '2rem auto', padding: '1rem 0.5rem' }}>
      <h2 style={{ textAlign: 'center' }}>Tu pedido esta en proceso...</h2>
      <section style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <span>Artista: {nameArtist}</span>
        <span>Album: {album}</span>
        <span>Año: {year}</span>

        <button onClick={handleBack} style={{marginTop:'20px'}}>Buscas otro albúm?</button>
      </section>
    </DivCard>
  )
}

export default Card