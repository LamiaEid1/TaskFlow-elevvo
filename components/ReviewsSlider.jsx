import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const ReviewsSlider = () => {
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Sample reviews data
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechCorp Inc.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "TaskFlow has completely transformed how our team manages projects. The collaboration features are outstanding, and the interface is incredibly intuitive. Highly recommended!"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Software Developer",
      company: "StartupXYZ",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "I've tried many task management tools, but TaskFlow stands out. The smart reminders and easy task organization have boosted my productivity significantly."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Creative Agency",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "Our agency handles multiple client projects simultaneously. TaskFlow's real-time updates and team collaboration features have been game-changers for us."
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Freelancer",
      company: "Independent",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 4,
      review: "As a freelancer juggling multiple projects, TaskFlow helps me stay organized and never miss deadlines. The user experience is fantastic!"
    },
    {
      id: 5,
      name: "Lisa Park",
      role: "Operations Manager",
      company: "GlobalTech",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      review: "TaskFlow has streamlined our operations completely. The analytics and reporting features give us valuable insights into our team's productivity."
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length])

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index) => {
    setCurrentReview(index)
  }

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6 mb-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real users think about TaskFlow.
          </p>
        </div>

        {/* Main Slider */}
        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextReview}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:shadow-xl transition-all duration-300 opacity-0 group-hover:opacity-100 md:opacity-100"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Reviews Container */}
          <div className="relative overflow-hidden group">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <div key={review.id} className="w-full flex-shrink-0 px-4 md:px-8">
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-10">
                      <Quote className="w-16 h-16 text-gray-400" />
                    </div>
                    
                    {/* Review Content */}
                    <div className="relative z-10">
                      {/* Stars */}
                      <div className="flex items-center justify-center mb-6">
                        <div className="flex space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      
                      {/* Review Text */}
                      <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
                        "{review.review}"
                      </p>
                      
                      {/* User Info */}
                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={review.avatar}
                          alt={review.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                        />
                        <div className="text-center md:text-left">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {review.name}
                          </h4>
                          <p className="text-gray-600">
                            {review.role}
                          </p>
                          <p className="text-sm text-gray-500">
                            {review.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center space-x-3 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => goToReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">10K+</div>
            <div className="text-gray-600">Happy Users</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">4.9</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">99%</div>
            <div className="text-gray-600">Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">24/7</div>
            <div className="text-gray-600">Support</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSlider