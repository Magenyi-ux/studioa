'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-illustration');

  return (
    <section className="relative bg-background pt-20 pb-24 md:pt-28 md:pb-32">
       <div className="absolute top-0 left-0 -z-10 h-full w-full bg-[radial-gradient(circle_800px_at_50%_200px,hsl(var(--primary)/15%),transparent_80%)]"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-1 gap-12 items-center">
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight text-foreground">
            The Smart Way to Master Your Exams
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground">
            AI-powered study assistant, past questions, and notes — built for the modern Nigerian student to excel.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
            <a href="#waitlist">
              <Button size="lg" className="font-bold text-lg h-14 w-full sm:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 group">
                Get Early Access <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
