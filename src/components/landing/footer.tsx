import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, Linkedin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold font-headline text-foreground">
              <Image src="/logo.png" alt="SphereLearn Logo" width={32} height={32} className="rounded-full" />
              Sphere<span className="text-primary">Learn</span>
            </Link>
            <p className="text-sm text-muted-foreground">Study Smarter, Not Harder.</p>
            <div className="flex space-x-4 mt-2">
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold mb-2 text-foreground">Platform</h4>
              <a href="#features" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Features</a>
              <a href="#how-it-works" className="text-muted-foreground text-sm hover:text-foreground transition-colors">How It Works</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="font-semibold mb-2 text-foreground">Company</h4>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">About Us</a>
              <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">Privacy Policy</a>
            </div>
            <div className="sm:col-span-1 col-span-2">
              <h4 className="font-semibold mb-2 text-foreground">Stay Updated</h4>
              <p className="text-muted-foreground text-sm mb-3">Join our mailing list for the latest news.</p>
              <form className="flex gap-2">
                <Input type="email" placeholder="Enter your email" className="bg-secondary"/>
                <Button variant="outline" size="icon">
                  <Send className="w-4 h-4"/>
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 SphereLearn. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
