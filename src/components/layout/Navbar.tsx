import Link from 'next/link';
import { Search, Bell, Mail, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-1">
            <span className="text-2xl font-bold tracking-tight text-primary hidden sm:block">
              VOICE<span className="text-[#2DD0B3]">.</span>
            </span>
          </Link>
          <div className="relative hidden md:block w-72 lg:w-96">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input 
              placeholder="Search VOICE..." 
              className="pl-10 bg-muted/50 border-none focus-visible:ring-primary"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-2 right-2 flex h-2 w-2 rounded-full bg-accent"></span>
          </Button>
          <Button variant="ghost" size="icon" className="hidden sm:flex">
            <Mail className="h-5 w-5" />
          </Button>
          <div className="h-8 w-[1px] bg-border mx-1 hidden sm:block"></div>
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="rounded-full overflow-hidden border">
              <img src="https://picsum.photos/seed/me/100/100" alt="Profile" className="h-full w-full object-cover" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
