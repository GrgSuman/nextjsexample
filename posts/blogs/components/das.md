---
title: das
slug: daa
description: dsa
category: Marketing
categorySlug: marketing
thumbnailUrl: sa
lastUpdated: '2024-12-11'
componentName: ShoppingCart
usage: das
---

const PricingTables = () => {
  const plans = [
    {
      name: 'Basic',
      price: '$9',
      period: '/month',
      description: 'Perfect for individuals and small projects',
      features: [
        '1 User',
        '10GB Storage',
        'Basic Support',
        'Basic Analytics',
        'Up to 2 Projects'
      ],
      isPopular: false,
      buttonText: 'Get Started'
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/month',
      description: 'Great for growing teams and businesses',
      features: [
        'Up to 5 Users',
        '50GB Storage',
        'Priority Support',
        'Advanced Analytics',
        'Up to 10 Projects',
        'Custom Domains'
      ],
      isPopular: true,
      buttonText: 'Try Pro Plan'
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/month',
      description: 'For large organizations and enterprises',
      features: [
        'Unlimited Users',
        '500GB Storage',
        '24/7 Support',
        'Premium Analytics',
        'Unlimited Projects',
        'Custom Solutions',
        'API Access'
      ],
      isPopular: false,
      buttonText: 'Contact Sales'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-600">Choose the plan that best fits your needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div 
            key={plan.name}
            className={`relative rounded-2xl p-8 ${
              plan.isPopular 
                ? 'border-2 border-blue-500 shadow-lg' 
                : 'border border-gray-200'
            }`}
          >
            {plan.isPopular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </span>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
              <div className="flex items-end justify-center gap-1">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
            </div>
            
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                plan.isPopular
                  ? 'bg-blue-500 text-white hover:bg-blue-600'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTables;
