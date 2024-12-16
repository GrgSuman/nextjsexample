import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

const CodeDisplay = ({myData}: {myData: string}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm relative">
      <button
        onClick={() => handleCopy(myData)}
        className="absolute top-2 right-2 p-2 hover:bg-gray-100 rounded-lg transition-colors"
        title="Copy code"
      >
        {copied ? (
          <Check className="h-4 w-4 text-green-500" />
        ) : (
          <Copy className="h-4 w-4 text-gray-500" />
        )}
      </button>
      <div className="p-6 bg-gray-50 rounded-b-xl">
        <pre className="text-base text-gray-800 whitespace-pre-wrap">
          {myData}
        </pre>
      </div>
    </div>
  );
};

export default CodeDisplay;