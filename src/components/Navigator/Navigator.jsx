import React from 'react'
import { useNavigate } from "react-router-dom"
import NavLink from './NavLink'


function Navigator() {
    const navigate = useNavigate()

  return (
    <>
        <div className='text-white  p-1 px-5 flex gap-4 justify-between items-center bg-white'>
            <div className='flex gap-4'>
                <p className='text-sm text-black'><i class="fa-solid fa-phone"></i> +234 123 456 7890</p>
                <p className='text-sm text-black'><i class="fa-solid fa-envelope"></i> info@travelai.com</p>
            </div>
            <div className='flex gap-4 mr-4 text-black'>
                <p className='text-sm cursor-pointer'><i class="fa-brands fa-facebook"></i></p>
                <p className='text-sm cursor-pointer'><i class="fa-brands fa-twitter"></i></p>
                <p className='text-sm cursor-pointer'><i class="fa-brands fa-instagram"></i></p>
                <p className='text-sm cursor-pointer'><i class="fa-brands fa-youtube"></i></p>
                <p className='text-sm cursor-pointer'><i class="fa-brands fa-linkedin"></i></p>
            </div>
        </div>

        <nav className='flex justify-between items-center py-4 px-8  text-white '>
            <div className='w-full flex gap-20 items-center space-x-12 '>
                <a className='flex text-2xl font-bold' href="#">
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Travel</span>
                    <img src="/assets/icons/icon-global.gif" alt="search" className="w-8 h-8" /><span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>AI</span>
                </a>
                <div className='hidden md:flex space-x-3 ml-12 gap-3 '>
                    <NavLink />
                </div>
            </div>

            <div className='flex items-center gap-9'>
                <p className="text-white flex items-center gap-1"><i class="fa-solid fa-globe"></i>EN</p>
                <div className='flex'>
                    <button className='w-20 font-medium hover:font-bold underline underline-offset-2'  onClick={() => navigate('/signup')} >Signup</button>
                    <button className='w-20 font-medium hover:font-bold underline underline-offset-2'  onClick={() => navigate('/login')}>Login</button>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navigator