import { BookCopy, Bot, PenSquare, Sparkles, WifiOff } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: BookCopy,
    title: 'Past questions library',
    description: 'Jump into WAEC and JAMB questions with clear topic tags and faster revision flow.',
  },
  {
    icon: Bot,
    title: 'Offline AI coach',
    description: 'Get study help even without internet, then sync your progress once you reconnect.',
  },
  {
    icon: PenSquare,
    title: 'Digital notebook',
    description: 'Capture ideas, sketch solutions, and keep every subject neatly organized in one place.',
  },
  {
    icon: Sparkles,
    title: 'Personalized study tips',
    description: 'Receive focused recommendations that help you improve one session at a time.',
  },
  {
    icon: WifiOff,
    title: 'Built for low-connectivity',
    description: 'Stay productive in class, at home, or on the move with features that work offline.',
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Why students choose SphereLearn</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A calmer way to study that actually fits your routine.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything is designed to reduce friction, sharpen your focus, and help you retain more with less stress.
          </p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[1.75rem] border border-border/70 bg-background/80 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
