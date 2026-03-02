'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

type AnimationState = 'start' | 'drawing' | 'fading' | 'finished';

export function SplashScreen({ onFinished }: { onFinished: () => void }) {
  const [animationState, setAnimationState] = useState<AnimationState>('start');

  useEffect(() => {
    const timings = {
      start: 100,
      fade: 2500,
      finish: 3000,
    };

    const startTimer = setTimeout(() => setAnimationState('drawing'), timings.start);
    const fadeTimer = setTimeout(() => setAnimationState('fading'), timings.fade);
    const finishTimer = setTimeout(onFinished, timings.finish);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinished]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ${
        animationState === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <style jsx>{`
        @keyframes reveal {
          0% {
            transform: translateY(20px);
            opacity: 0;
            filter: blur(10px);
          }
          100% {
            transform: translateY(0);
            opacity: 1;
            filter: blur(0);
          }
        }

        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .word {
          display: inline-block;
          opacity: 0;
          animation: reveal 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        #sphere {
          animation-delay: 0.3s;
        }

        #learn {
          animation-delay: 0.6s;
        }

        .tagline {
          opacity: 0;
          animation: fadeIn 1s ease-out 1.2s forwards;
        }

        .progress-container {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: hsl(var(--secondary));
        }

        .progress-bar {
          height: 100%;
          background: hsl(var(--primary));
          animation: progress 2.8s linear forwards;
        }
      `}</style>
      <div className={`flex flex-col items-center gap-8 transition-all duration-700 ease-in-out ${animationState === 'drawing' ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="relative w-32 h-32 mb-4">
           <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl animate-pulse"></div>
           <Image src="/logo.png" alt="Logo" fill className="object-contain rounded-full relative z-10" />
        </div>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-foreground tracking-tight">
            <span id="sphere" className="word">Sphere</span>
            <span id="learn" className="word text-primary">Learn</span>
          </h1>
          <p className="tagline mt-4 text-xl text-muted-foreground font-medium">
            Study Smarter, Not Harder
          </p>
        </div>
      </div>
      <div className="progress-container">
        <div className="progress-bar"></div>
      </div>
    </div>
  );
}
