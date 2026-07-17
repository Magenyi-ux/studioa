import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';

export function Header() {
  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/85 backdrop-blur-xl supports-[backdrop-filter]:bg-background/70">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-2xl font-bold font-headline tracking-tight text-foreground">
          Sphere<span className="text-primary">Learn</span>
        </Link>
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle />
            <a href="#waitlist">
              <Button className="rounded-full px-5">
                Join Waitlist <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </a>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-6 p-6">
                <Link href="/" className="text-2xl font-bold font-headline text-foreground">
                  Sphere<span className="text-primary">Learn</span>
                </Link>
                <nav className="mt-4 grid gap-4">
                  {navItems.map((item) => (
                    <a key={item.label} href={item.href} className="text-lg font-medium text-foreground transition-colors hover:text-primary">
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="flex items-center gap-4">
                  <ThemeToggle />
                  <a href="#waitlist" className="flex-grow">
                    <Button className="w-full" size="lg">Join Waitlist</Button>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
