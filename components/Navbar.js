import React from 'react'

const Navbar = () => {
    return (
        <div className='flex flex-row items-center justify-between py-6 mx-10 2xl:mx-0'>
            <div className='flex flex-row items-center gap-12'>
                <img src="/assets/logo.png" alt="Logo" width={80} />
                <div className='flex flex-row items-center gap-4 font-medium leading-[26px]'>
                    <a href='#' className='text-[#FF5555] font-medium'>Home</a>
                    <a href='#'>About Us</a>
                    <a href='#'>Pricing</a>
                    <a href='#'>Features</a>
                </div>
            </div>
            <button className='px-12 py-2 rounded-[4px] bg-black text-white'>
                Download
            </button>
        </div>
    )
}

export default Navbar
