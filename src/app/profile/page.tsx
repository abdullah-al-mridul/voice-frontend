
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { 
  Home, 
  Hash, 
  Bell, 
  Mail, 
  User, 
  MoreHorizontal, 
  ArrowLeft,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Search,
  Settings,
  Menu
} from 'lucide-react';
import { dummyPosts, trendingTopics, followSuggestions, appState } from '@/lib/dummy-data';
import { SidebarLink } from '@/app/feed/page';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; handle: string; avatar: string } | null>(null);
  const [activeTab, setActiveTab] = useState('posts');
  const [isLoading, setIsLoading] = useState(!appState.hasInitialLoaded);

  useEffect(() => {
    const savedUser = localStorage.getItem('voice_user');
    if (!savedUser) {
      router.push('/');
    } else {
      setUser(JSON.parse(savedUser));
      appState.hasInitialLoaded = true;
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return (
    <div className="h-screen w-full flex items-center justify-center bg-transparent relative z-50">
      <span className="text-primary font-black text-6xl tracking-tighter">
        VOICE<span className="text-[#2DD0B3]">.</span>
      </span>
    </div>
  );

  const coverImage = PlaceHolderImages.find(img => img.id === 'profile-cover')?.imageUrl || "https://picsum.photos/seed/cover/800/260";

  return (
    <div className="bg-background dark:bg-[#0F0F0F] text-foreground min-h-screen">
      {/* Mobile Top Navigation */}
      <div className="sm:hidden sticky top-0 bg-background/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md z-50 border-b border-border dark:border-[#2F3336] px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <button onClick={() => router.back()} className="p-1">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="flex flex-col">
            <span className="font-bold text-base leading-none">{user?.name}</span>
            <span className="text-xs text-muted-foreground">12 VOICEs</span>
          </div>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-1">
              <Menu className="w-6 h-6 text-muted-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 p-0 bg-background border-r border-border dark:border-[#2F3336]">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <SheetDescription className="sr-only">Access your profile and navigation links</SheetDescription>
            <div className="flex flex-col h-full p-4">
              <nav className="space-y-1">
                <SidebarLink icon={Home} label="Home" href="/feed" />
                <SidebarLink icon={Hash} label="Explore" href="/explore" />
                <SidebarLink icon={Bell} label="Notifications" badge href="/notifications" />
                <SidebarLink icon={Mail} label="Messages" href="/messages" />
                <SidebarLink icon={User} label="Profile" active href="/profile" />
                <SidebarLink icon={Settings} label="Settings" href="#" />
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      <div className="container mx-auto max-w-7xl h-screen flex">
        
        {/* Sidebar Navigation */}
        <header className="w-20 xl:w-64 h-full flex flex-col justify-between p-2 xl:px-4 xl:py-4 sticky top-0 border-r border-border dark:border-[#2F3336] overflow-y-auto hidden sm:flex z-50">
          <div className="flex flex-col items-center xl:items-start space-y-4 w-full">
            <Link href="/feed" className="p-3 mb-2 rounded-full hover:bg-primary/10 transition-colors cursor-pointer w-fit self-center xl:self-start">
              <span className="text-primary font-black text-2xl tracking-tighter">
                <span className="xl:hidden">V<span className="text-[#2DD0B3]">.</span></span>
                <span className="hidden xl:inline">VOICE<span className="text-[#2DD0B3]">.</span></span>
              </span>
            </Link>
            <nav className="space-y-2 w-full flex flex-col items-center xl:items-start">
              <SidebarLink icon={Home} label="Home" href="/feed" />
              <SidebarLink icon={Hash} label="Explore" href="/explore" />
              <SidebarLink icon={Bell} label="Notifications" badge href="/notifications" />
              <SidebarLink icon={Mail} label="Messages" href="/messages" />
              <SidebarLink icon={User} label="Profile" active href="/profile" />
              <SidebarLink icon={MoreHorizontal} label="More" href="#" />
            </nav>
          </div>
          <div className="flex items-center justify-center xl:justify-between p-3 rounded-full hover:bg-secondary dark:hover:bg-[#16181C] transition-colors cursor-pointer w-fit xl:w-full mt-4 mx-auto xl:mx-0">
            <div className="flex items-center gap-3">
              <img alt="User" className="w-10 h-10 rounded-full object-cover border border-border" src={user?.avatar} />
              <div className="hidden xl:flex flex-col leading-tight overflow-hidden">
                <span className="font-bold text-sm truncate">{user?.name}</span>
                <span className="text-muted-foreground text-sm truncate">{user?.handle}</span>
              </div>
            </div>
            <MoreHorizontal className="hidden xl:block w-4 h-4 text-muted-foreground" />
          </div>
        </header>

        {/* Main Profile Content */}
        <main className="flex-1 max-w-2xl w-full border-r border-border dark:border-[#2F3336] min-h-screen overflow-y-auto no-scrollbar">
          {/* Desktop Header */}
          <div className="sticky top-0 bg-background/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md z-40 border-b border-border dark:border-[#2F3336] px-4 py-1 flex items-center gap-6 hidden sm:flex">
            <button onClick={() => router.back()} className="p-2 hover:bg-secondary rounded-full transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="flex flex-col">
              <h2 className="text-xl font-bold leading-tight">{user?.name}</h2>
              <span className="text-xs text-muted-foreground">12 VOICEs</span>
            </div>
          </div>

          {/* Profile Visuals */}
          <div className="relative">
            <div className="h-32 sm:h-48 w-full bg-muted overflow-hidden">
              <img src={coverImage} alt="Cover" className="w-full h-full object-cover" />
            </div>
            
            <div className="px-4 relative">
              <div className="flex justify-between items-start">
                {/* Avatar positioned partially overlapping the cover */}
                <div className="relative -mt-12 sm:-mt-16 mb-2">
                  <div className="border-4 border-background rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 bg-background shadow-sm">
                    <img src={user?.avatar} alt="Avatar" className="w-full h-full object-cover" />
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3">
                   <button className="border border-border hover:bg-secondary rounded-full p-2 h-fit">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                  <button className="border border-border hover:bg-secondary font-bold px-4 py-2 rounded-full text-sm transition-colors h-fit">
                    Edit profile
                  </button>
                </div>
              </div>

              {/* Profile Details */}
              <div className="mt-1 space-y-3">
                <div>
                  <h1 className="text-xl font-black flex items-center gap-1">
                    {user?.name}
                    <i className="fas fa-check-circle text-primary text-sm"></i>
                  </h1>
                  <p className="text-muted-foreground text-sm leading-none">{user?.handle}</p>
                </div>

                <p className="text-sm leading-normal">
                  Digital product designer, tech enthusiast, and professional VOICEr. Building the future of social connection. 🚀
                </p>

                <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LinkIcon className="w-4 h-4" />
                    <a href="#" className="text-primary hover:underline">voice.app/me</a>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined June 2023</span>
                  </div>
                </div>

                <div className="flex gap-4 text-sm pt-1">
                  <div className="flex gap-1 hover:underline cursor-pointer">
                    <span className="font-bold">482</span>
                    <span className="text-muted-foreground">Following</span>
                  </div>
                  <div className="flex gap-1 hover:underline cursor-pointer">
                    <span className="font-bold">1.2K</span>
                    <span className="text-muted-foreground">Followers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border dark:border-[#2F3336] mt-4">
            <ProfileTab label="VOICEs" active={activeTab === 'posts'} onClick={() => setActiveTab('posts')} />
            <ProfileTab label="Replies" active={activeTab === 'replies'} onClick={() => setActiveTab('replies')} />
            <ProfileTab label="Media" active={activeTab === 'media'} onClick={() => setActiveTab('media')} />
            <ProfileTab label="Likes" active={activeTab === 'likes'} onClick={() => setActiveTab('likes')} />
          </div>

          {/* Posts List */}
          <div className="pb-20">
            {dummyPosts.slice(0, 3).map(post => (
              <div key={post.id} className="p-4 border-b border-border hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors flex gap-3">
                 <img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src={user?.avatar} />
                 <div className="flex-1">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="font-bold">{user?.name}</span>
                      <span className="text-muted-foreground">{user?.handle} · {post.timestamp}</span>
                    </div>
                    <p className="text-sm mt-1">{post.content}</p>
                    {post.image && (
                      <div className="mt-3 rounded-2xl overflow-hidden border border-border">
                        <img src={post.image} alt="Content" className="w-full h-auto max-h-80 object-cover" />
                      </div>
                    )}
                 </div>
              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-[350px] hidden lg:block h-screen sticky top-0 px-6 py-4 space-y-4 overflow-y-auto no-scrollbar">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground group-focus-within:text-primary w-4 h-4" />
            <input className="w-full bg-secondary dark:bg-[#16181C] border-none rounded-full py-3 pl-12 pr-4 focus:ring-1 focus:ring-primary text-sm placeholder-muted-foreground outline-none" placeholder="Search VOICE" type="text" />
          </div>

          <div className="bg-secondary dark:bg-[#16181C] rounded-2xl border border-border dark:border-[#2F3336] pt-3">
            <h3 className="font-extrabold text-xl px-4 mb-3">Who to follow</h3>
            {followSuggestions.map(person => (
              <div key={person.id} className="flex items-center justify-between px-4 py-3 hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors">
                <div className="flex items-center gap-3">
                  <img alt="Avatar" className="w-10 h-10 rounded-full object-cover" src={person.avatar} />
                  <div className="flex flex-col min-w-0">
                    <span className="font-bold text-sm hover:underline truncate">{person.name}</span>
                    <span className="text-xs text-muted-foreground truncate">{person.handle}</span>
                  </div>
                </div>
                <button className="bg-primary hover:bg-primary-hover text-white text-sm font-bold px-4 py-1.5 rounded-full transition-colors">Follow</button>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}

function ProfileTab({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex-1 py-4 text-sm font-bold hover:bg-secondary dark:hover:bg-white/5 transition-colors relative",
        active ? "text-foreground" : "text-muted-foreground"
      )}
    >
      {label}
      {active && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-1 bg-primary rounded-full"></div>}
    </button>
  );
}
