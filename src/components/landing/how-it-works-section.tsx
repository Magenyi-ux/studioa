import { BookOpenCheck, TrendingUp, UserPlus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
  number: string;
};

const steps: Step[] = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Join the waitlist',
    description: 'Sign up once to get early access, launch updates, and a front-row seat to the beta.',
  },
  {
    icon: BookOpenCheck,
    number: '02',
    title: 'Start studying',
    description: 'Jump into past questions, AI guidance, and a structured workspace designed for real revision.',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Grow with every session',
    description: 'Track your consistency and build confidence as your revision becomes easier and more focused.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-secondary/40 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Simple from the first step</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start strong, study faster, and keep moving forward.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            The experience stays simple from sign-up to revision, so you can focus on learning instead of getting lost in tools.
          </p>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="rounded-[1.75rem] border border-border/70 bg-background/80 p-8 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <step.icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-primary">{step.number}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
