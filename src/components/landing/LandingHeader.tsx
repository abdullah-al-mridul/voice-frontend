import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function LandingHeader() {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold tracking-tight text-primary">
            VOICE<span className="text-[#2DD0B3]">.</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
          <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link href="/feed">
            <Button variant="ghost" className="hidden sm:inline-flex">Sign In</Button>
          </Link>
          <Link href="/feed">
            <Button className="rounded-full px-6 bg-accent hover:bg-accent/90">Join Now</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
