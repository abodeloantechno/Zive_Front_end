import React, { useState, useEffect } from 'react';

// Custom hook for intersection observer
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [element, threshold]);

  return [setElement, isInView];
};

// Motion component for animations
export const MotionDiv = ({ children, className, delay = 0, duration = 0.6, ...props }) => {
  const [ref, isInView] = useInView(0.1);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <div 
      ref={ref} 
      className={`${className} transition-all duration-700 ease-out ${
        hasAnimated 
          ? 'opacity-100 translate-y-0 scale-100' 
          : 'opacity-0 translate-y-8 scale-95'
      }`}
      style={{ 
        transitionDelay: hasAnimated ? `${delay}ms` : '0ms',
        transitionDuration: `${duration * 1000}ms`
      }}
      {...props}
    >
      {children}
    </div>
  );
};

// Floating element component
export const FloatingElement = ({ children, className, duration = 3 }) => {
  return (
    <div 
      className={`${className} animate-pulse`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${Math.random() * 2}s`
      }}
    >
      {children}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};