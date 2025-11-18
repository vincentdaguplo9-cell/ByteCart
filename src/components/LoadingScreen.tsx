"use client";

import React, { useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadingComplete();
    }, 2000); // Display the welcome screen for 2 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  const developers = [
    "Vincent Daguplo",
    "Mary Alysson Villasin",
    "Angel Sinining",
    "Escoton Xavier",
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background text-foreground">
      <h1 className="text-4xl font-bold mb-8">ByteCart</h1>
      <div className="w-3/4 max-w-md text-center">
        {/* Removed the "Welcome" text */}
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">Developed by:</p>
        {developers.map((name, index) => (
          <p key={index} className="text-md font-semibold">
            {name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;