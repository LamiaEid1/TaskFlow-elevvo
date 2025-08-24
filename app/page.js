"use client"
import React from 'react'
import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'

// Icons for the feature cards
const TaskManagementIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
)

const CollaborationIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2z"/>
    <path d="M12.5 11c1.38 0 2.5-1.12 2.5-2.5S13.88 6 12.5 6 10 7.12 10 8.5s1.12 2.5 2.5 2.5z"/>
    <path d="M19 17v-3c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1h6c.55 0 1-.45 1-1z"/>
    <circle cx="7.5" cy="14" r="2"/>
    <path d="M11.08 17.92C10.78 16.78 9.78 16 8.5 16s-2.28.78-2.58 1.92c-.11.41.21.78.64.78h3.88c.43 0 .75-.37.64-.78z"/>
  </svg>
)

const SmartRemindersIcon = () => (
  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
)

const HeroSection = () => {
  const handleGetStarted = () => {
    console.log('Get Started clicked!')
  }

  return (
    <div className="min-h-screen">
      {/* Blue Background Section */}
      <section style={{ backgroundColor: 'var(--background1)' }} className="flex flex-col items-center justify-center py-20 pb-40 relative overflow-hidden">
        {/* Hero Content */}
        <div className="text-center px-6 max-w-4xl mx-auto mb-10 relative z-20">
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

      {/* White Background Section for Cards */}
      <section className="bg-white py-20 -mt-20">
        {/* Features Grid - Overlapping Design */}
        <div className="w-full max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
           <FeatureCard
              icon={<TaskManagementIcon />}
              title="Easy Task Management"
              description="Quickly add, organize, and track your tasks with a simple and intuitive interface."
              iconBgColor="bg-blue-500"
              className="transform md:-translate-y-12"
            /> 
            <FeatureCard
              icon={<TaskManagementIcon />}
              title="Easy Task Management"
              description="Quickly add, organize, and track your tasks with a simple and intuitive interface."
              iconBgColor="bg-blue-500"
              className="transform md:-translate-y-12"
            />
            
            <FeatureCard
              icon={<SmartRemindersIcon />}
              title="Smart Reminders"
              description="Never miss a deadline with intelligent reminders tailored to your schedule."
              iconBgColor="bg-yellow-500"
              className="transform md:-translate-y-12"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HeroSection