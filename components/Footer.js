import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col items-center w-full my-16 mx-4 2xl:mx-0'>
            <div className='grid grid-cols-5'>
                <div className='flex flex-col items-start gap-3'>
                    <img src="/assets/logo.png" alt="Logo" className='-ml-1.5' />
                    <a href='mailto:help@frybix.com' className='flex flex-row items-center gap-2'>
                        <img src="/assets/mail.png" alt="Mail" />
                        help@frybix.com
                    </a>
                    <a href='tel:+1234567890' className='flex flex-row items-center gap-2'>
                        <img src="/assets/call.png" alt="Call" />
                        +123 4567 890
                    </a>
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-[24px] font-semibold'>Links</h1>
                    <a href='#'>Home</a>
                    <a href='#'>About Us</a>
                    <a href='#'>Bookings</a>
                    <a href='#'>Blog</a>
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-[24px] font-semibold'>Legal</h1>
                    <a href='#'>Terms Of Use</a>
                    <a href='#'>Privacy Policy</a>
                    <a href='#'>Cookie Policy</a>
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-[24px] font-semibold'>Product</h1>
                    <a href='#'>Take Tour</a>
                    <a href='#'>Live Chat</a>
                    <a href='#'>Reviews</a>
                </div>
                <div className='flex flex-col items-start gap-3'>
                    <h1 className='text-[24px] font-semibold'>Newsletter</h1>
                    <span className='font-semibold'>Stay Up To Date</span>
                    <div className='flex flex-row items-center gap-2'>
                        <input type="email" name="Email" id="Email" placeholder='Your Email' className='border-none p-3 focus:none w-[100px] text-[14px]' />
                        <button className='flex flex-row items-center gap-2 px-6 py-3 text-[14px] text-white font-medium bg-black rounded-[4px]'>
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <div className='pt-8 pb-4 border-t-2 border-gray-300 w-[60%] mx-auto mt-10 text-center'>
                <h1>Copyright 2022 uifry.com all rights reserved</h1>
            </div>
        </div>
    )
}

export default Footer
