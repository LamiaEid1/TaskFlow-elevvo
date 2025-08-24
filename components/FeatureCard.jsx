import React from 'react'

const FeatureCard = ({ 
  icon,
  title,
  description,
  iconBgColor = "bg-green-500",
  className = ""
}) => {
  return (
    <div className={`-mt-4 md:-mt-10 bg-white rounded-2xl p-6 md:p-12 lg:p-10 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${className}`}>
      
      {/* Icon Container */}
      <div className="flex justify-center mb-6 md:mb-10">
        <div className={`w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${iconBgColor} rounded-2xl flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 text-center mb-4 md:mb-6">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-center leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard