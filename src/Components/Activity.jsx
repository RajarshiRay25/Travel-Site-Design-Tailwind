import React from 'react'

const Activity = () => {
  return (
    <div className='w-full max-w-[1100px] m-auto md:flex mt-[-70px]'>
        <div className='relative p-4'>
            <h1 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold'>Subnautical Bliss</h1>
            <img src="https://images.unsplash.com/photo-1682687982029-edb9aecf5f89?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="subnautica" className='h-full w-full object-cover relative border-4 border-white shadow-lg'/>
        </div>
        <div className='relative p-4'>
            <h1 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold'>Heavenly Hills</h1>
            <img src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hills" className='h-full w-full object-cover relative border-4 border-white shadow-lg'/>
        </div>
        <div className='relative p-4'>
            <h1 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-xl text-white font-bold'>Historical Explore</h1>
            <img src="https://images.unsplash.com/photo-1703932093233-b00a86113d99?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="city" className='h-full w-full object-cover relative border-4 border-white shadow-lg'/>
        </div>
    </div>
  )
}

export default Activity