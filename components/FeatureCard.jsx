import React from 'react'

const FeatureCard = ({ 
  icon,
  title,
  description,
  iconBgColor = "bg-green-500",
  className = ""
}) => {
  return (
    <div className={`-mt-10 bg-white rounded-2xl p-20 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${className}`}>
      
      {/* Icon Container */}
      <div className="flex justify-center mb-10">
        <div className={`w-24 h-24 ${iconBgColor} rounded-2xl flex items-center justify-center text-3xl`}>
          {icon}
        </div>
      </div>
      
      {/* Title */}
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-6">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-gray-600 text-center leading-relaxed text-base">
        {description}
      </p>
    </div>
  )
}

export default FeatureCard
