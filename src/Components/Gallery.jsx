import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1100px] w-full m-auto px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4 text-3xl'>Gallery</h2>
        <div className='grid sm:grid-cols-5 gap-4'>
            <div className='sm:col-span-3 col-span-2 row-span-2'>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1704186502060-247ad4c77626?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1704186502060-247ad4c77626?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1704186502060-247ad4c77626?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1704186502060-247ad4c77626?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
            </div>
            <div>
                <img className='w-full h-full object-cover' src="https://images.unsplash.com/photo-1704186502060-247ad4c77626?q=80&w=1769&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" />
            </div>
        </div>
    </div>
  )
}

export default Gallery