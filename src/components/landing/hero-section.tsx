'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-illustration');

  return (
    <section className="relative bg-background pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden">
       <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 h-[600px] w-full max-w-7xl bg-[radial-gradient(circle_at_center,hsl(var(--primary)/10%),transparent_70%)] opacity-70"></div>
       <div className="absolute -top-24 -right-24 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>
       <div className="absolute top-1/2 -left-24 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl"></div>

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
              <Button size="lg" className="font-bold text-lg h-14 w-full sm:w-auto shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105 group">
                Get Early Access <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>

          <div className="mt-16 pt-8 border-t border-border/50">
            <p className="text-sm font-medium text-muted-foreground mb-6">TRUSTED BY STUDENTS FROM TOP UNIVERSITIES</p>
            <div className="flex flex-wrap gap-8 md:gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
               <div className="flex items-center gap-2 font-headline font-bold text-lg">
                 <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-[10px] text-white">UNILAG</div>
                 UNILAG
               </div>
               <div className="flex items-center gap-2 font-headline font-bold text-lg">
                 <div className="w-8 h-8 rounded-full bg-red-700 flex items-center justify-center text-[10px] text-white">UI</div>
                 UI IBADAN
               </div>
               <div className="flex items-center gap-2 font-headline font-bold text-lg">
                 <div className="w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-[10px] text-white">OAU</div>
                 OAU IFE
               </div>
               <div className="flex items-center gap-2 font-headline font-bold text-lg">
                 <div className="w-8 h-8 rounded-full bg-blue-900 flex items-center justify-center text-[10px] text-white">ABU</div>
                 ABU ZARIA
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
