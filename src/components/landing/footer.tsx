import Link from 'next/link';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background/80 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="max-w-md">
            <Link href="/" className="text-2xl font-bold font-headline tracking-tight text-foreground">
              Sphere<span className="text-primary">Learn</span>
            </Link>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              A focused study platform built to help students revise smarter, stay organized, and feel more prepared for every exam.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" aria-label="Twitter" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Instagram" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="LinkedIn" className="rounded-full border border-border p-2 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-foreground">Platform</h4>
              <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
              <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">How It Works</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold text-foreground">Company</h4>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">About Us</a>
              <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-border/60 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 SphereLearn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
