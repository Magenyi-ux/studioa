import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function HeroSection() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-illustration');

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(124,58,237,0.16),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_28%)]" />
      <div className="container mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Sparkles className="h-4 w-4" />
            AI study support for ambitious students
          </div>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            The modern way to prepare for exams with confidence.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground sm:text-xl">
            SphereLearn gives you a smarter study routine with AI-guided help, organized notes, and quick access to the questions that matter most.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#waitlist"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/30"
            >
              Join the waitlist <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-border bg-background/80 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary"
            >
              See what’s inside
            </a>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ['1-click', 'early access'],
              ['AI', 'study coach'],
              ['Offline', 'ready'],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-border/70 bg-background/70 p-4 shadow-sm">
                <p className="text-xl font-semibold text-foreground">{value}</p>
                <p className="text-sm text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-primary/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/80 p-3 shadow-2xl shadow-primary/10 backdrop-blur">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={900}
                height={650}
                priority
                className="h-[420px] w-full rounded-[1.4rem] object-cover sm:h-[480px]"
              />
            )}
            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/20 bg-slate-950/75 p-4 text-white shadow-xl backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-300">Designed for students</p>
              <div className="mt-2 flex items-start gap-2">
                <BadgeCheck className="mt-0.5 h-5 w-5 text-primary" />
                <p className="text-sm leading-6 text-slate-100">Everything is organized to help you study with less stress and more momentum.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
