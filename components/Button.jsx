import React from 'react'

const Button = ({ 
  children = "Get Started",
  onClick,
  variant = "primary",
  size = "medium",
  disabled = false,
  fullWidth = false,
  className = ""
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  
  const variants = {
    primary: "bg-white text-white focus:ring-blue-500 shadow-sm",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 border border-gray-300",
    outline: "bg-transparent text-blue-500 hover:bg-blue-50 focus:ring-blue-500 border border-blue-500",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-50 focus:ring-blue-500"
  }
  
  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-15 py-4 text-lg"
  }
  
  const buttonStyles = `
    ${baseStyles}
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ')

  return (
    <button
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
    >
     <div className='text-blue-700'>
        {children}
     </div>
    </button>
  )
}

export default Button