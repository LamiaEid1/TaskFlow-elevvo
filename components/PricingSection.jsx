import React from 'react'
import PlanCard from './PlanCard'

const PricingSection = () => {
  const handleChoosePlan = (planName) => {
    console.log(`${planName} plan selected!`)
  }

  const plans = [
    {
      planName: "Free",
      price: null,
      features: [
        "Up to 5 projects",
        "Basic task management", 
        "Personal workspace",
        "Mobile app access"
      ],
      onChoosePlan: () => handleChoosePlan('Free')
    },
    {
      planName: "Pro",
      price: "9",
      period: "month",
      isPopular: true,
      features: [
        "Unlimited projects",
        "Advanced task management",
        "Team collaboration",
        "Priority support",
        "Analytics & reporting",
        "Custom integrations"
      ],
      onChoosePlan: () => handleChoosePlan('Pro')
    },
    {
      planName: "Team",
      price: "49",
      period: "month", 
      features: [
        "Everything in Pro",
        "Advanced team features",
        "Admin controls",
        "Custom workflows",
        "Advanced security",
        "24/7 phone support"
      ],
      onChoosePlan: () => handleChoosePlan('Team')
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your needs. Start free and upgrade anytime.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PlanCard
              key={index}
              planName={plan.planName}
              price={plan.price}
              period={plan.period}
              isPopular={plan.isPopular}
              features={plan.features}
              onChoosePlan={plan.onChoosePlan}
              className={plan.isPopular ? "md:-mt-4 md:mb-4" : ""}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom plan for your organization?
          </p>
          <button className="text-blue-600 hover:text-blue-700 font-semibold text-lg transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}

export default PricingSection