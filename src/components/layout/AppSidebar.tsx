import Link from 'next/link';
import { Home, Compass, Bell, User, Settings, Hash, Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function AppSidebar() {
  const menuItems = [
    { icon: Home, label: 'Feed', href: '/feed' },
    { icon: Compass, label: 'Explore', href: '#' },
    { icon: Bell, label: 'Notifications', href: '#' },
    { icon: Hash, label: 'Trending', href: '#' },
    { icon: Bookmark, label: 'Bookmarks', href: '#' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Settings', href: '#' },
  ];

  return (
    <aside className="hidden md:flex flex-col gap-4 w-64 h-[calc(100vh-5rem)] sticky top-20">
      <div className="flex flex-col gap-1 px-2">
        {menuItems.map((item) => (
          <Link key={item.label} href={item.href}>
            <Button 
              variant="ghost" 
              className="w-full justify-start gap-4 text-lg font-medium py-6 px-4 hover:bg-primary/5 hover:text-primary transition-all rounded-xl"
            >
              <item.icon className="h-6 w-6" />
              {item.label}
            </Button>
          </Link>
        ))}
      </div>
      <Button className="mt-4 mx-2 rounded-xl py-6 font-bold text-lg shadow-lg hover:shadow-xl transition-all gradient-bg border-none">
        New Post
      </Button>
      
      <div className="mt-auto p-4 rounded-2xl bg-white border post-card-shadow flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-muted overflow-hidden">
          <img src="https://picsum.photos/seed/me/100/100" alt="Avatar" className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="font-semibold text-sm truncate">Alex Rivera</span>
          <span className="text-xs text-muted-foreground truncate">@arivera</span>
        </div>
      </div>
    </aside>
  );
}