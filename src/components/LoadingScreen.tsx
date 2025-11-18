"use client";

import React, { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          onLoadingComplete();
          return 100;
        }
        return prevProgress + 1; // Increment by 1%
      });
    }, 30); // Adjust speed here (e.g., 30ms for 3 seconds total)

    return () => clearInterval(interval);
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
      <div className="w-3/4 max-w-md">
        <Progress value={progress} className="w-full h-3 mb-4" />
        <p className="text-center text-lg font-medium">{progress}% Loading...</p>
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