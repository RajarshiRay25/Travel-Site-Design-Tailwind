import React from 'react'

const TopBar = () => {
    return (
        <div className='flex justify-between items-center px-4 py-2'>
            <div className='flex items-center'>
                <ion-icon name="chatbox-ellipses-outline" className='chatbox_icon'/>
                <h1 className='font-bold text-xl text-gray-800'>TRAVEL-MANIA</h1>
            </div>
            <div className='flex'>
                <div className='hidden md:flex items-center px-4'>
                <ion-icon name="time-outline"/>
                <p>10:00 AM - 7:00 PM</p>
                </div>
                <div className='hidden md:flex items-center px-4'>
                <ion-icon name="phone-portrait-outline"/>
                <p>9192017291</p>
                </div>
                <button className='ml-2 px-2 py-2 text-white bg-blue-600 rounded-md'>Connect With Us</button>
            </div>
        </div>
    )
}

export default TopBar