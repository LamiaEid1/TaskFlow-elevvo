"use client"
import React, { useEffect, useRef, useState } from 'react'
import { MdVerifiedUser } from "react-icons/md";
import Button from '@/components/Button'
import FeatureCard from '@/components/FeatureCard'
import { MdOutlineStar } from "react-icons/md";
import { RiTeamFill } from "react-icons/ri";
import ReviewsSlider from '@/components/ReviewsSlider';
import PlanCard from '@/components/PlanCard';
import Footer from '@/components/Footer';

const HeroSection = () => {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    reviews: useRef(null),
    pricing: useRef(null),
    footer: useRef(null)
  }

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]))
        }
      })
    }, observerOptions)

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  const handleGetStarted = () => {
    console.log('Get Started clicked!')
  }

  const handleChoosePlan = (planName) => {
    console.log(`${planName} plan selected!`)
  }

  const getSectionClasses = (sectionName, baseClasses = '') => {
    const isVisible = visibleSections.has(sectionName)
    return `${baseClasses} transition-all duration-1000 ease-out ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-12'
    }`
  }

  const getStaggeredClasses = (index, sectionName, baseClasses = '') => {
    const isVisible = visibleSections.has(sectionName)
    const delay = index * 200
    return `${baseClasses} transition-all duration-700 ease-out ${
      isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'
    }`
  }

  return (
    <div className="min-h-screen">
      {/* Blue Background Section */}
      <section 
        ref={sectionRefs.hero}
        data-section="hero"
        style={{ backgroundColor: 'var(--background1)' }} 
        className={getSectionClasses('hero', "flex flex-col items-center justify-center py-10 md:py-20 pb-20 md:pb-40 relative overflow-hidden")}
      >
        {/* Hero Content */}
        <div className="text-center px-4 md:px-6 max-w-4xl mx-auto mb-8 md:mb-10 relative z-20">
          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 md:mb-8 tracking-tight transition-all duration-1000 ease-out delay-300 ${
            visibleSections.has('hero') 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}>
            TaskFlow
          </h1>
          
          {/* Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl text-white/90 mb-8 md:mb-12 font-light max-w-3xl mx-auto leading-relaxed px-2 transition-all duration-1000 ease-out delay-500 ${
            visibleSections.has('hero') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            Organize your tasks. Boost your productivity.
          </p>
          
          {/* CTA Button */}
          <div className={`flex justify-center transition-all duration-1000 ease-out delay-700 ${
            visibleSections.has('hero') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <Button 
              onClick={handleGetStarted}
              size="large"
              className="font-semibold cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* White Background Section for Cards */}
      <section 
        ref={sectionRefs.features}
        data-section="features"
        className="bg-white py-10 md:py-20 -mt-10 md:-mt-20"
      >
        {/* Features Grid - Overlapping Design */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative z-10">
            <div className={getStaggeredClasses(0, 'features')}>
              <FeatureCard
                icon={
                  <MdVerifiedUser 
                    className='text-white' 
                    size={window?.innerWidth >= 1024 ? 50 : window?.innerWidth >= 768 ? 40 : 32}
                  /> 
                }
                title="Easy Task Management"
                description="Quickly add, organize, and track your tasks with a simple and intuitive interface."
                iconBgColor="bg-blue-500"
                className="transform md:-translate-y-12 hover:scale-105 transition-transform duration-200"
              /> 
            </div>
            
            <div className={getStaggeredClasses(1, 'features')} style={{ transitionDelay: '200ms' }}>
              <FeatureCard
                 icon={
                  <RiTeamFill 
                    className='text-white' 
                    size={window?.innerWidth >= 1024 ? 50 : window?.innerWidth >= 768 ? 40 : 32}
                  /> 
                }
                title="Collaboration"
                  description="Share tasks with your team and stay in sync with real-time updates."
                iconBgColor="bg-green-500"
                className="transform md:-translate-y-12 hover:scale-105 transition-transform duration-200"
              />
            </div>

            <div className={getStaggeredClasses(2, 'features')} style={{ transitionDelay: '400ms' }}>
              <FeatureCard
                icon={
                  <MdOutlineStar 
                    className='text-white' 
                    size={window?.innerWidth >= 1024 ? 50 : window?.innerWidth >= 768 ? 40 : 32}
                  />
                }
                title="Smart Reminders"
                description="Never miss a deadline with intelligent reminders tailored to your schedule."
                iconBgColor="bg-yellow-500"
                className="transform md:-translate-y-12 hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <div 
        ref={sectionRefs.reviews}
        data-section="reviews"
        className={getSectionClasses('reviews', '-mt-16')}
      >
        <ReviewsSlider />
      </div>

      {/* Pricing Section */}
      <section 
        ref={sectionRefs.pricing}
        data-section="pricing"
        className="py-16 md:py-24 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ease-out ${
            visibleSections.has('pricing') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-12'
          }`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the perfect plan for your needs. Start free and upgrade anytime.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className={getStaggeredClasses(0, 'pricing')} style={{ transitionDelay: '200ms' }}>
              <PlanCard
                planName="Free"
                price={null}
                features={[
                  "Up to 5 projects",
                  "Basic task management", 
                  "Personal workspace",
                  "Mobile app access",
                  
                ]}
                onChoosePlan={() => handleChoosePlan('Free')}
                className="hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            <div className={getStaggeredClasses(1, 'pricing')} style={{ transitionDelay: '400ms' }}>
              <PlanCard
                planName="Pro"
                price="9"
                period="month"
                isPopular={true}
                features={[
                  "Unlimited projects",
                  "Advanced task management",
                  "Team collaboration",
                  "Priority support",
                  "Analytics & reporting",
                  "Custom integrations"
                ]}
                onChoosePlan={() => handleChoosePlan('Pro')}
                className="md:-mt-4 md:mb-4 hover:scale-105 transition-transform duration-200"
              />
            </div>
            
            <div className={getStaggeredClasses(2, 'pricing')} style={{ transitionDelay: '600ms' }}>
              <PlanCard
                planName="Team"
                price="49"
                period="month"
                features={[
                  "Everything in Pro",
                  "Advanced team features",
                  "Admin controls",
                  "Custom workflows",
                  "Advanced security",
                  "24/7 phone support"
                ]}
                onChoosePlan={() => handleChoosePlan('Team')}
                className="hover:scale-105 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-16 transition-all duration-1000 ease-out delay-800 ${
            visibleSections.has('pricing') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            <p className="text-gray-600 mb-4">
              Need a custom plan for your organization?
            </p>
            <button className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-all duration-200 hover:scale-105">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
      
      <div 
        ref={sectionRefs.footer}
        data-section="footer"
        className={getSectionClasses('footer')}
      >
        <Footer/>
      </div>
    </div>
  )
}

export default HeroSection