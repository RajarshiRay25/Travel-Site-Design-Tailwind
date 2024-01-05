import React from 'react'
const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
        <img src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className='w-full h-full object-cover' />

        <div className='max-w=[1100px] m-auto'>
            <div className='absolute top-[40%] w-full  max-w-[700px] h-full flex flex-col text-white p-4'>
                <h1 className='font-bold text-4xl text-gray-800'>Find Your Dream Destination</h1>
                <h2 className='text-4xl italic py-4 text-gray-600'>With Travel-Mania</h2>
                <p className='text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat neque maiores ut facilis assumenda, fugiat quod! Sunt atque eveniet deserunt consectetur maiores excepturi, beatae culpa.</p>
            </div>
        </div>
    </div>
  )
}

export default Hero