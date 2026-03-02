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
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500 ${
        animationState === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <style jsx>{`
        @keyframes dropIn {
          0% {
            transform: translateY(-80px);
            opacity: 0;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .word {
          display: inline-block;
          opacity: 0;
          animation: dropIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        #sphere {
          animation-delay: 0.5s;
        }

        #learn {
          animation-delay: 0.9s;
        }
      `}</style>
      <div className={`flex flex-col items-center gap-6 transition-all duration-500 ease-in-out ${animationState === 'drawing' ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="relative w-24 h-24 animate-pulse">
           <Image src="/logo.png" alt="Logo" fill className="object-contain rounded-full" />
        </div>
        <h1 className="text-5xl font-headline font-bold text-foreground">
          <span id="sphere" className="word">Sphere</span>
          <span id="learn" className="word text-primary">Learn</span>
        </h1>
      </div>
    </div>
  );
}
