"use client"
import React from 'react'
import Button from '@/components/Button'

const HeroSection = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked!')
  }

  return (
    <section className="min-h-screen flex items-center justify-center ">
      <div className="text-center px-6 max-w-4xl mx-auto mb-80">
        {/* Main Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight">
          TaskFlow
        </h1>
        
        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white/90 mb-12 font-light max-w-3xl mx-auto leading-relaxed">
          Organize your tasks. Boost your productivity.
        </p>
        
        {/* CTA Button */}
        <div className="flex justify-center">
          <Button 
            onClick={handleGetStarted}
            size="large"
            className="font-semibold cursor-pointer"
          >
            Get Started
          </Button>
        </div>
      </div>
    
    </section>
  )
}

export default HeroSection