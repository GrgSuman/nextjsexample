import React, { useState } from 'react';

const SubscriptionForm = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="w-[80%] rounded-xl bg-white p-8 shadow-lg">
        <div className="mb-6 text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">Stay Updated</h2>
          <p className="text-gray-600">
            Subscribe to our newsletter for the latest updates and exclusive offers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-800 outline-none transition-colors focus:border-blue-500"
                disabled={status === 'loading'}
              />
              {status === 'loading' && (
                <div className="absolute right-3 top-3">
                  <div className="h-5 w-5 animate-spin rounded-full border-2 border-blue-500 border-t-transparent"></div>
                </div>
              )}
            </div>
            {status === 'error' && (
              <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-lg bg-blue-500 px-4 py-3 text-white transition-colors hover:bg-blue-600 disabled:bg-blue-300"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe Now'}
          </button>
        </form>

        {status === 'success' && (
          <div className="mt-4 rounded-lg bg-green-50 p-4 text-center text-green-800">
            Thanks for subscribing! Check your email to confirm your subscription.
          </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>We respect your privacy and won't share your information.</p>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionForm;