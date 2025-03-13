import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

const LoadingButton = () => {
  const buttonRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      gsap.to(buttonRef.current, {
        duration: 0.5,
        scale: 1.1,
        yoyo: true,
        repeat: -1,
        ease: 'power1.inOut',
      });
    } else {
      gsap.killTweensOf(buttonRef.current);
      gsap.set(buttonRef.current, { scale: 1 });
    }
  }, [isLoading]);

  const handleClick = () => {
    setIsLoading(true);
    // Simulate a loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      disabled={isLoading}
      className={`loading-button ${isLoading ? 'loading' : ''}`}
    >
      {isLoading ? 'Loading...' : 'Click Me'}
    </button>
  );
};

export default LoadingButton;
