import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <>
        <div className='hero flex flex-col items-center justify-center realtive z-10 px-8 pb-32 pt-32'>
            <h1 className='text-4xl md:text-5xl font-bold text-center text-white max-w-2xl font-sans '>
                Find your dream destination
            </h1>
            <p className='text-sm mb-12 text-center max-w-2xl text-white/70'>
                Drecribe your dream destination and experience, and we'll find 
                the perfect stycation for you.
            </p>
            <form
                className="flex items-center mt-8 max-w-3xl w-full bg-black/10 backdrop-blur-md lg-h-16 rounded-full h-16 p-3"
            >
                <Input 
                    type="text" 
                    placeholder="Describe your destination experince or location."
                    className="flex-grow bg-transparent lg:text-lg rounded-full p-6 text-white placeholder:text-white/50 border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0"

                />
                <Button
                    type="submit"
                    className="rounded-full w-48 h-12 flex items-center gap-x-2 lg:h-12 transition-transform hover:scale-105 duration-300 ease-in-out text-black bg-gradient-to-r from-cyan-600 via-cyan-500 to-cyan-400"
                >
                <span className='flex items-center justify-between gap-3 '><img src="/assets/icons/searchlogo.gif" alt="search" className="w-8 h-8" />AI Search</span>
                </Button>
            </form>
        </div>
    </>
  )
}

export default Hero