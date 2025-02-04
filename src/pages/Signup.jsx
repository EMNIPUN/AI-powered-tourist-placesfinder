import React from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export const Signup = () => {
  return (
    <div className='min-h-screen flex bg-gradient-to-br from-gray-50 to-gray-100'>
      {/* Left Section - Branding & Hero */}
      <div className='hidden lg:flex flex-1 flex-col justify-between p-12 bg-gradient-to-br from-violet-500/90 to-pink-500/90 text-white'>
        <div>
          <a className='flex items-center gap-2 text-3xl font-bold' href="/">
            <span>Travel</span>
            <img src="/assets/icons/icon-global.gif" alt="TravelAI" className="w-10 h-10" />
            <span>AI</span>
          </a>
          
          <div className='mt-24'>
            <h1 className='text-5xl font-bold leading-tight mb-6'>
              Start Your Journey With Us
            </h1>
            <p className='text-xl text-white/90 leading-relaxed mb-8'>
              Join thousands of travelers who trust TravelAI for their dream vacation planning. 
              Get personalized recommendations and exclusive travel insights.
            </p>
            
            <div className='mt-12 bg-white/10 p-6 rounded-2xl backdrop-blur-sm'>
              <p className='text-lg font-medium mb-4'>Why choose TravelAI?</p>
              <div className='space-y-3'>
                {[
                  'Personalized travel recommendations',
                  'Exclusive deals and discounts',
                  'Expert local insights',
                  'Real-time travel updates'
                ].map((benefit, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <svg className="w-5 h-5 text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='flex items-end gap-4'>
          <img src="/assets/icons/map.png" alt="Map" className="w-20 h-20 opacity-90" />
          <p className='text-5xl font-bold'>
            <span>Visit </span>
            <span className='text-yellow-300'>Sri </span>
            <span className='text-orange-300'>Lanka</span>
          </p>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className='flex-1 flex items-center justify-center p-8'>
        <div className='w-full max-w-md space-y-8 bg-white p-10 rounded-2xl shadow-lg'>
          <div className='text-center'>
            <h2 className='text-3xl font-bold text-gray-900'>Create Account</h2>
            <p className='mt-2 text-gray-600'>Join our community of travelers</p>
          </div>

          <form className='mt-8 space-y-6'>
            <div className='space-y-5'>
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <Label htmlFor="firstName" className='text-gray-700'>First Name</Label>
                  <Input 
                    id="firstName"
                    type="text" 
                    placeholder="John"
                    className='mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-violet-500'
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className='text-gray-700'>Last Name</Label>
                  <Input 
                    id="lastName"
                    type="text" 
                    placeholder="Doe"
                    className='mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-violet-500'
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email" className='text-gray-700'>Email address</Label>
                <Input 
                  id="email"
                  type="email" 
                  placeholder="name@example.com"
                  className='mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-violet-500'
                />
              </div>

              <div>
                <Label htmlFor="password" className='text-gray-700'>Password</Label>
                <Input 
                  id="password"
                  type="password" 
                  placeholder="Create a strong password"
                  className='mt-2 block w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-violet-500 focus:ring-violet-500'
                />
              </div>
            </div>

            <div className='flex items-start gap-3'>
              <Checkbox id="terms" className="mt-1" />
              <Label htmlFor="terms" className='text-sm text-gray-600'>
                I want to receive travel inspiration, deals and updates via email
              </Label>
            </div>

            <Button className='w-full py-3 bg-gradient-to-r from-violet-600 to-pink-600 text-white rounded-lg hover:from-violet-700 hover:to-pink-700 transition-all duration-200'>
              Create Account
            </Button>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-200'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-4 bg-white text-gray-500'>Or sign up with</span>
              </div>
            </div>

            <div className='grid grid-cols-4 gap-4'>
              {['google', 'facebook', 'twitter', 'linkedin'].map((provider) => (
                <button
                  key={provider}
                  className='p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors duration-200'
                >
                  <img 
                    src={`/assets/icons/${provider}.png`}
                    alt={provider}
                    className="w-6 h-6 mx-auto"
                  />
                </button>
              ))}
            </div>

            <p className='text-center text-gray-600'>
              Already have an account?{' '}
              <a href="#" className='text-violet-600 hover:text-violet-500 font-medium'>
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
