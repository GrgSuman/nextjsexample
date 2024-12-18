import React, { useState } from 'react';

// Style 1: Modern Card Layout
const ModernPricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <div className="flex justify-center items-center gap-3">
          <span className={!isAnnual ? 'font-bold' : ''}>Monthly</span>
          <button 
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-12 h-6 bg-blue-500 rounded-full p-1 transition-colors"
          >
            <div className={`w-4 h-4 bg-white rounded-full transition-transform ${isAnnual ? 'translate-x-6' : ''}`} />
          </button>
          <span className={isAnnual ? 'font-bold' : ''}>Annual</span>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'Basic', price: isAnnual ? 99 : 10 },
          { name: 'Pro', price: isAnnual ? 199 : 20 },
          { name: 'Enterprise', price: isAnnual ? 299 : 30 }
        ].map((plan) => (
          <div key={plan.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
            <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
            <p className="text-3xl font-bold mb-6">${plan.price}</p>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
              Select Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Style 2: Feature-Focused Layout
const FeaturePricing = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-xl">
      <div className="grid md:grid-cols-3 gap-6">
        {[
          {
            name: 'Starter',
            price: 10,
            features: ['1 User', '5 Projects', 'Basic Support']
          },
          {
            name: 'Professional',
            price: 20,
            features: ['5 Users', '20 Projects', 'Priority Support', 'Analytics']
          },
          {
            name: 'Enterprise',
            price: 30,
            features: ['Unlimited Users', 'Unlimited Projects', '24/7 Support', 'Custom Features']
          }
        ].map((plan) => (
          <div key={plan.name} className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold mb-4">${plan.price}/mo</p>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded-lg transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component that showcases all three variants
const PricingShowcase = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-16 p-8">
      <section>
        <h2 className="text-2xl font-bold mb-6">Modern Card Style</h2>
        <ModernPricing />
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6">Feature-Focused Dark Style</h2>
        <FeaturePricing />
      </section>
    </div>
  );
};

export default PricingShowcase;