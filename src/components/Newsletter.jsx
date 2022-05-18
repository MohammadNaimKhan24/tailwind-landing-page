import React from 'react'

const Newsletter = () => {
  return (
    <div className="text-white w-full py-16 px-4">
        <div className="max-w-[1240px] grid md:grid-cols-3 mx-auto">
           <div className="col-span-2 my-4">
           <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your flow?</h1>
            <p >Sign to our newsletter and stay up to data.</p>
           </div>
           <div className="my-4">
                <div className="flex sm:flex-row items-center justify-between w-full">
                    <input 
                    className="w-full flex text-black p-3 rounded-md  focus:outline-none" type="email"  />
                    <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">Notify me</button>
                </div>

           </div>
        </div>
    </div>
  )
}

export default Newsletter;