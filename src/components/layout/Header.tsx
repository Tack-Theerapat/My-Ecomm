"use client";
import React, { useEffect, useState } from 'react'

const AnnouncementBar = () => {
    return (
        <div className='w-full bg-black py-2'>
            <div className='container mx-auto flex items-center justify-center px-8'>
                <span className='text-center text-sm font-medium tracking-wide text-white'>
                    FREE SHIPPING ON ORDERS OVER $15.00 X FREE RETURN
                </span>            
            </div>

        </div>
    )
}

const Header = () => {

        const [isOpen, setIsOpen] = useState<boolean>(true);
        const [prevScrollY, setPrevScrollY] = useState<number>(0);

        useEffect(() => {
            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                const scrolledUp = currentScrollY < prevScrollY;

                if(scrolledUp) {
                    setIsOpen(true);
                } else if(currentScrollY > 100){
                    setIsOpen(false);
                }

                setPrevScrollY(currentScrollY);
            }

            setPrevScrollY(window.scrollY);
            
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll)
            }
        }, [prevScrollY])

    return (
    <header className='w-full sticky top-0 z-50'>
        <div 
        className={`w-full bg-white shadow-md transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
            <AnnouncementBar />
            <div className='w-full flex justify-between items-center py-3 sm:py-4 bg-white/60 shadow-sm border-b border-gray-100 vackdrip-blur-sm' >
            <div className='flex justify-between items-center container mx-auto px-8'>
                <div className='flex flex-1 justify-start items-center gap-4 sm:gap-6'>
                    
                    <button class="group relative inline-block w-[44px] p-[5px] h-[45px] m-[25px]">
                    <span
                        class="mx-[auto] my-[0] relative top-[12px] w-[30px] h-[6px] bg-[#000] block [transition-property:margin,_width] group-hover:w-[20px] duration-200 after:absolute after:content-[''] after:mt-[12px] after:w-[30px] after:h-[6px] after:bg-[#000] after:block after:left-[0] after:[transition-property:margin,_left] after:duration-200 group-hover:after:mt-[6px] group-hover:after:-left-[5px] before:absolute before:content-[''] before:-mt-[12px] before:w-[30px] before:h-[6px] before:bg-[#000] before:block before:left-[0] before:[transition-property:margin,_width,_left] before:duration-200 group-hover:before:-mt-[6px] group-hover:before:w-[10px] group-hover:before:left-[5px]"
                    ></span>
                    </button>

                    <nav className='hidden md:flex gap-4 lg:gap-6 text-sm font-medium'>
                        <a href='#'>Shop</a>
                        <a href='#'>New Arriveals</a>
                        <a href='#'>Sale</a>
                    </nav>
                </div>

                <a href='#'>Link</a>

                <div className='flex flex-1 justify-end items-center gap-2 sm:gap-4'>
                        <button className="p-2 rounded hover:bg-gray-100 transition">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                            </svg>
                        </button>
                        <a href='/auth/sign-in'>Sign In</a>
                        <a href='/auth/sign-up'>Sign Up</a>

                        <button className='text-gray-700 hover:text-gray-900 relative'>
                            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"/>
                             </svg>

                            <span className='absolute -top-1 -right-1 bg-black text-white text-[10px] sm:text-xs w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full flex items-center justify-center'>
                                0
                            </span>

                        </button>
                </div>
            </div>
            </div>

        </div>
    </header>
    )
}


export default Header
