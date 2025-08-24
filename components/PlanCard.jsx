import React from 'react'

const PlanCard = ({ 
  planName,
  price,
  period = "month",
  isPopular = false,
  features = [],
  onChoosePlan,
  className = ""
}) => {
  return (
    <div className={`
      relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 flex flex-col h-full
      ${isPopular 
        ? 'bg-gradient-to-b from-blue-500 to-blue-600 text-white shadow-xl' 
        : 'bg-white text-gray-900 shadow-lg border border-gray-200 hover:shadow-xl'
      }
      ${className}
    `}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-yellow-400 text-gray-900 px-6 py-2 rounded-full text-sm font-semibold">
            Most Popular
          </div>
        </div>
      )}
      
      {/* Plan Name */}
      <div className="text-center mb-6">
        <h3 className={`text-3xl lg:text-4xl font-bold mb-4 ${
          isPopular ? 'text-white' : 'text-gray-900'
        }`}>
          {planName}
        </h3>
        
        {/* Price */}
        {price && (
          <div className={`text-2xl lg:text-3xl font-bold ${
            isPopular ? 'text-white' : 'text-gray-900'
          }`}>
            ${price}
            <span className={`text-lg font-normal ${
              isPopular ? 'text-white/80' : 'text-gray-600'
            }`}>
              /{period}
            </span>
          </div>
        )}
      </div>
      
      {/* Features List */}
      {features.length > 0 && (
        <div className="mb-8 flex-grow">
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg 
                  className={`w-5 h-5 mr-3 ${
                    isPopular ? 'text-white' : 'text-green-500'
                  }`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className={`${
                  isPopular ? 'text-white/90' : 'text-gray-600'
                }`}>
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Choose Plan Button */}
      <div className="mt-auto">
        <button
          onClick={onChoosePlan}
          className={`
            w-full py-4 px-6 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105
            ${isPopular 
              ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg' 
              : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
            }
          `}
        >
          Choose Plan
        </button>
      </div>
    </div>
  )
}

export default PlanCard