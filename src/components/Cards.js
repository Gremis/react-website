import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira esses destinos EPIC!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore a cachoeira escondida nas profundezas da Selva Amazônica'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Viaje pelas Ilhas de Bali em um cruzeiro privado'
              label='Luxo'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Veleje no Oceano Atlântico visitando Uncharted Waters'
              label='Mistério'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experimente o futebol no topo das montanhas Himilayan'
              label='Aventura'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Passeie pelo Deserto do Saara em uma excursão guiada de camelo'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
