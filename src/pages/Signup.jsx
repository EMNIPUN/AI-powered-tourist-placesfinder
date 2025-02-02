import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export const Signup = () => {
  return (
    <div className='flex justify-end items-center h-screen bg-gray-300'>

      <div className='absolute top-10 left-5 hidden md:flex '>
        <a className='flex text-2xl font-bold' href="#">
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>Travel</span>
          <img src="/assets/icons/icon-global.gif" alt="search" className="w-8 h-8" /><span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>AI</span>
        </a>
      </div>

      <div className='absolute top-30 left-10 hidden md:flex flex-col'>
        <p className='text-left text-2xl mb-2'>The trip of your dreams starts with Lonely Planet.</p>
        <p className='text-left'>Covering hundreds of destinations and countless experiences,<br/> Lonely Planet is your guide for traveling better and smarter.</p>

        <div className='flex justify-center items-center'>
          <p className='text-7xl font-bold uppercase mt-3'>Visit<span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-orange-400  to-green-600'> Sri</span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 via-red-400  to-red-600'>Lanka</span></p>
          <img src="/assets/icons/map.png" alt="search" className="w-16 h-16 mt-5"/>
        </div>
      </div>


      <div className='flex flex-col justify-self-end mt-10 mr-32 p-10 shadow-2xl rounded-md bg-white'>
          <h1 className='text-2xl text-center'>Welcome to TravelAI</h1>
          <p className='text-black/70 text-sm text-center'>Sign Up to continue.</p>
          <form className='flex flex-col gap-4 max-w-md mx-auto mt-8'>
              <div className='flex gap-4'>
                  <Input type="text" placeholder="First Name" className='w-full' />
                  <Input type="text" placeholder="Last Name" className='w-full' />
              </div>

              <Input type="text" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Input type="password" placeholder="Confirm Password" />
              <Button>Sign Up</Button>
          </form>
          <div className="flex gap-2 mt-5 ">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="font-thin">I want to receive emails about awesome travel experiences and <br/> news!</Label>
          </div>
          <div className='flex gap-2 mt-5'>
              <p className='text-black/70'>Already have an account?</p>
              <a href="#" className='text-cyan-600 hover:text-cyan-500'>Sign In</a>
          </div>

          <div className='flex gap-4 justify-center mt-5 items-center'>
            <div className='bg-black w-40 h-0.5'></div>
            <div>or login with</div>
            <div className='bg-black w-40 h-0.5'></div>
          </div>

          <div className='flex gap-6 mt-4 justify-center'>
              <p className='text-3xl cursor-pointer'><img src="/assets/icons/facebook.png" alt="search" className="w-8 h-8" /></p>
              <p className='text-3xl cursor-pointer'><img src="/assets/icons/google.png" alt="search" className="w-8 h-8" /></p>
              <p className='text-3xl cursor-pointer'><img src="/assets/icons/twitter.png" alt="search" className="w-8 h-8" /></p>
              <p className='text-3xl cursor-pointer'><img src="/assets/icons/linkedin.png" alt="search" className="w-8 h-8" /></p>
          </div>
      </div>
    </div>
  )
}
