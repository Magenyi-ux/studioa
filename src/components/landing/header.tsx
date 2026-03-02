import Link from 'next/link';
import Image from 'next/image';
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-foreground">
          <Image src="/logo.png" alt="SphereLearn Logo" width={40} height={40} className="rounded-full" />
          Sphere<span className="text-primary">Learn</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-muted-foreground transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <ThemeToggle />
            <a href="#waitlist">
              <Button>
                Join Waitlist <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
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
                <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-foreground">
                   <Image src="/logo.png" alt="SphereLearn Logo" width={40} height={40} className="rounded-full" />
                   Sphere<span className="text-primary">Learn</span>
                </Link>
                <nav className="grid gap-4 mt-4">
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
