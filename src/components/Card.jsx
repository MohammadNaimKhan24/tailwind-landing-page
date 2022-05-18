import React from 'react'

const Card = ({profile, price, send, granted, user, storage, buttonText}) => {
  return (
    <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-8 md:my-4 rounded-lg hover:scale-105 duration-300">
    <img className="w-20 mx-auto mt-[-3.5rem] bg-transparent" src={profile} alt="/" />
    <h2 className="text-2xl font-bold text-center py-8">{user}</h2>
    <p className="font-bold text-center text-4xl">{price}</p>
    <div className="text-center font-medium ">
      <p className="py-2 mx-8 border-b mt-8">{storage}</p>
      <p className="py-2 mx-8 border-b">{granted}</p>
      <p className="py-2 mx-8 border-b">{send}</p>
    </div>
    <button className="bg-[#00df9a] rounded-md font-medium w-[200px]  my-6 px-6 py-3 mx-auto">{buttonText}</button>
  </div>
  )
}

export default Card