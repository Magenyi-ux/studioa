'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export function WaitlistSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    toast({
      title: "You're on the list! 🎉",
      description: "Thanks for joining the SphereLearn waitlist. We'll be in touch soon.",
    });

    const submittedName = name;
    const submittedEmail = email;
    setName('');
    setEmail('');

    fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: submittedName, email: submittedEmail }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const data = await response.json();
          toast({
            title: 'Oops! Something went wrong',
            description: data.error || 'err services err',
            variant: 'destructive',
          });
        }
      })
      .catch((error) => {
        console.error('Error submitting waitlist:', error);
        toast({
          title: 'Connection Error',
          description: 'err services err',
          variant: 'destructive',
        });
      });
  };

  return (
    <section id="waitlist" className="py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Card className="overflow-hidden border-border/70 bg-gradient-to-br from-primary/10 via-background to-background p-0 shadow-2xl shadow-primary/10">
            <div className="grid gap-10 p-8 md:grid-cols-[1.02fr_0.98fr] md:p-10 lg:p-12">
              <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">Join the beta</p>
                <CardTitle className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  Be first in line for a smarter study experience.
                </CardTitle>
                <CardDescription className="mt-4 max-w-xl text-base leading-8 text-muted-foreground">
                  Get exclusive access, launch updates, and early perks when SphereLearn opens its doors.
                </CardDescription>
                <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                  {['Priority beta access', 'Launch discounts', 'Early feature updates'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <CardContent className="rounded-[1.5rem] border border-border/70 bg-background/90 p-6 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Input
                      type="text"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="h-12 text-base"
                    />
                    <Input
                      type="email"
                      placeholder="Your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="h-12 text-base"
                    />
                  </div>
                  <Button type="submit" size="lg" className="h-12 w-full text-lg font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? 'Joining...' : 'Join waitlist'}
                  </Button>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
