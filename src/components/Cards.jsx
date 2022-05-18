import React from 'react';
import { cardData } from '../data';
import Card from './Card';

const Cards = () => {
  return (
    <div className="w-full px-4 bg-white py-[10rem]">
     <div className="mx-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">

    {cardData.map((card) => {
      const {profile, user, price, storage, granted, buttonText, send} = card;
      return <Card profile={profile} user={user} price={price} storage={storage} granted={ granted} send={send} buttonText={buttonText}/>
    })}

     </div>
    </div>
  )
}

export default Cards;