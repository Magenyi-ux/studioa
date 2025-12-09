import { UserPlus, BookOpenCheck, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Step = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: UserPlus,
    title: 'Join the Waitlist',
    description: 'A simple, one-step signup to get early access, launch discounts, and updates.',
  },
  {
    icon: BookOpenCheck,
    title: 'Start Studying',
    description: 'Dive into past questions, chat with your AI assistant, and use powerful study tools.',
  },
  {
    icon: TrendingUp,
    title: 'Track Your Progress',
    description: 'Save solutions, review personalized tips, and watch your knowledge and confidence grow.',
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold">Get Started in Seconds</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Your journey to smarter studying is just three simple steps away.
          </p>
        </div>
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-border -z-10"></div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            {steps.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center">
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-full bg-background border-2 border-primary shadow-lg shadow-primary/20">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-headline font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
