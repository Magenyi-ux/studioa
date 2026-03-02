import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get started for free during our beta phase. Special founding member discounts coming soon.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="relative border-primary bg-background shadow-2xl shadow-primary/10">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              Early Bird
            </div>
            <CardHeader className="pb-8 pt-8">
              <CardTitle className="text-2xl">Beta Access</CardTitle>
              <CardDescription>Limited time founding member offer</CardDescription>
              <div className="mt-6 flex items-baseline justify-center gap-1">
                <span className="text-5xl font-bold tracking-tight">₦0</span>
                <span className="text-sm font-semibold text-muted-foreground">/month</span>
              </div>
            </CardHeader>
            <CardContent className="grid gap-4 pb-8">
              {[
                "Full AI Assistant Access",
                "Unlimited Past Questions",
                "Digital Notebook & Syncing",
                "Offline Mode",
                "Priority Beta Features"
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-sm">
                  <div className="rounded-full bg-primary/10 p-1">
                    <Check className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <a href="#waitlist" className="w-full">
                <Button className="w-full h-12 font-bold text-lg">Join the Waitlist</Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
