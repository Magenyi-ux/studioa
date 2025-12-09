import { BookCopy, Bot, PenSquare, Sparkles, WifiOff, Calculator } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: BookCopy,
    title: 'Past Questions Library',
    description: 'Access a comprehensive library of WAEC & JAMB past questions.',
  },
  {
    icon: Bot,
    title: 'Offline AI Assistant',
    description: 'An AI study tool that works without internet, and syncs when you reconnect.',
  },
  {
    icon: PenSquare,
    title: 'Digital Notebook',
    description: 'Draw, take notes, and save your work. Your digital notebook for every subject.',
  },
  {
    icon: Sparkles,
    title: 'Daily Study Tips',
    description: 'Boost your learning with personalized, expert-backed tips delivered daily.',
  },
  {
    icon: WifiOff,
    title: 'Works Offline',
    description: 'No internet? No problem. Access most features offline and sync your progress later.'
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Everything You Need to Succeed</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            ZediLearn is packed with features designed to make studying more effective and less stressful.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative p-8 rounded-2xl bg-background border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/50 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6 p-3 bg-primary/10 rounded-lg w-fit">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-headline text-lg font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
