import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function Hero() {
  return (
    <>
      <div className='hero min-h-screen flex flex-col items-center justify-center relative z-10 px-8'>
        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-center text-white max-w-4xl font-sans mb-6 tracking-tight'>
          Find your dream destination
        </h1>
        <p className='text-base md:text-lg mb-12 text-center max-w-2xl text-white/80 font-light'>
          Describe your dream destination and experience, and we'll find 
          the perfect staycation for you.
        </p>
        <form className="flex items-center mt-4 max-w-3xl w-full bg-black/20 backdrop-blur-lg h-16 rounded-full p-3 border border-white/10">
          <Input 
            type="text" 
            placeholder="Describe your destination experience or location..."
            className="flex-grow bg-transparent lg:text-lg rounded-full p-6 text-white placeholder:text-white/60 border-none outline-none focus:border-none focus:outline-none focus-visible:ring-0"
          />
          <Button
            type="submit"
            className="rounded-full w-48 h-12 flex items-center justify-center gap-x-2 transition-all hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 duration-300 ease-in-out text-black bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300 font-medium"
          >
            <span className='flex items-center justify-between gap-2'>
              <img src="/assets/icons/searchlogo.gif" alt="search" className="w-7 h-7" />
              AI Search
            </span>
          </Button>
        </form>
      </div>
    </>
  )
}

export default Hero