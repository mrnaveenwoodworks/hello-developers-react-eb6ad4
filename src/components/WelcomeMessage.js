import React, { useState, useEffect } from "react";

const WelcomeMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after component mount
    setIsVisible(true);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div 
        className={`transform transition-all duration-1000 ${
          isVisible 
            ? "translate-y-0 opacity-100" 
            : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-indigo-600 mb-4">
          Hello, Dev!
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl">
          Welcome to this React application. Building amazing user experiences 
          with modern web technologies.
        </p>
        
        <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600">
          <button 
            className="px-8 py-3 rounded-full bg-white text-indigo-600 font-medium hover:bg-transparent hover:text-white transition-all duration-300"
            onClick={() => alert("Happy coding!")}
          >
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="20" height="20"><rect width="256" height="256" fill="none"/><polyline points="64 88 16 128 64 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="192 88 240 128 192 168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="160" y1="40" x2="96" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>
              <span className="ml-2">Start Coding</span>
            </div>
          </button>
        </div>
      </div>
      
      <div className={`mt-12 transition-all duration-1000 delay-500 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      }`}>
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl shadow-2xl overflow-hidden">
          <img src="https://images.unsplash.com/photo-1674574124792-3be232f1957f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Mzk2MDh8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDk3MTc5MzV8&ixlib=rb-4.1.0&q=80&w=1080" alt="happy developers coding together on laptops" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;