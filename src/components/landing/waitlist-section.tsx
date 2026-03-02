'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export function WaitlistSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Show immediate success feedback
    toast({
      title: "You're on the list! 🎉",
      description: "Thanks for joining the SphereLearn waitlist. We'll be in touch soon.",
    });

    const submittedName = name;
    const submittedEmail = email;
    setName('');
    setEmail('');

    // Perform the API call in the background
    fetch('/api/waitlist', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: submittedName, email: submittedEmail }),
    }).then(async (response) => {
      if (!response.ok) {
        const data = await response.json();
        toast({
          title: "Oops! Something went wrong",
          description: data.error || "err services err",
          variant: "destructive",
        });
      }
    }).catch((error) => {
      console.error('Error submitting waitlist:', error);
      toast({
        title: "Connection Error",
        description: "err services err",
        variant: "destructive",
      });
    });
  };

  return (
    <section id="waitlist" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <Card className="p-6 md:p-8 bg-card border-border/50 shadow-lg">
            <CardHeader className="p-0">
              <CardTitle className="font-headline text-3xl">Be the First to Access SphereLearn</CardTitle>
              <CardDescription className="pt-2 text-base max-w-md mx-auto text-muted-foreground">
                Get early access, exclusive beta invites, and special launch discounts.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0 pt-8">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="h-12 text-base"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="h-12 text-base"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-12 text-lg font-bold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Joining...' : 'Join Waitlist'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
