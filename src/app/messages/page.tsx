
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
  Search,
  Settings,
  Menu,
  MessageSquarePlus,
  ChevronLeft,
  Send,
  Image as ImageIcon,
  Smile,
  Info
} from 'lucide-react';
import { dummyConversations, type Conversation, appState } from '@/lib/dummy-data';
import { SidebarLink } from '@/app/feed/page';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from '@/components/ui/sheet';

export default function MessagesPage() {
  const router = useRouter();
  const [user, setUser] = useState<{ name: string; handle: string; avatar: string } | null>(null);
  const [selectedChat, setSelectedChat] = useState<Conversation | null>(null);
  const [messageText, setMessageText] = useState('');
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

  return (
    <div className="bg-background dark:bg-[#0F0F0F] text-foreground min-h-screen">
      {/* Mobile Top Navigation - Only show if no chat is selected on mobile */}
      {!selectedChat && (
        <div className="sm:hidden sticky top-0 bg-background/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md z-50 border-b border-border dark:border-[#2F3336] px-4 py-3 flex items-center justify-between">
          <Link href="/feed">
            <span className="text-primary font-black text-xl tracking-tighter">
              VOICE<span className="text-[#2DD0B3]">.</span>
            </span>
          </Link>
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
                <div className="mb-6 px-2 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <img alt="User" className="w-10 h-10 rounded-full object-cover" src={user?.avatar} />
                    <div className="flex flex-col">
                      <span className="font-bold text-sm">{user?.name}</span>
                      <span className="text-muted-foreground text-xs">{user?.handle}</span>
                    </div>
                  </div>
                  <div className="h-px bg-border w-full mt-2"></div>
                </div>
                <nav className="space-y-1">
                  <SidebarLink icon={Home} label="Home" href="/feed" />
                  <SidebarLink icon={Hash} label="Explore" href="/explore" />
                  <SidebarLink icon={Bell} label="Notifications" badge href="/notifications" />
                  <SidebarLink icon={Mail} label="Messages" active href="/messages" />
                  <SidebarLink icon={User} label="Profile" href="/profile" />
                  <SidebarLink icon={Settings} label="Settings" href="#" />
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      )}

      <div className="container mx-auto max-w-7xl h-screen flex relative overflow-hidden">
        
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
              <SidebarLink icon={Mail} label="Messages" active href="/messages" />
              <SidebarLink icon={User} label="Profile" href="/profile" />
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

        {/* Main Content Area - Contains both List and Chat Detail */}
        <div className="flex-1 flex overflow-hidden relative">
          
          {/* Conversation List Pane */}
          <main className={cn(
            "flex-1 max-w-2xl w-full border-r border-border dark:border-[#2F3336] min-h-screen overflow-y-auto no-scrollbar transition-all duration-300 ease-in-out",
            selectedChat ? "hidden md:block md:w-80 lg:w-[400px]" : "block"
          )}>
            <div className="sticky top-0 bg-background/80 dark:bg-[#0F0F0F]/80 backdrop-blur-md z-40 border-b border-border dark:border-[#2F3336]">
              <div className="flex items-center justify-between px-4 py-3">
                <h2 className="text-xl font-bold">Messages</h2>
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
                  <MessageSquarePlus className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
                </div>
              </div>
              <div className="px-4 pb-3">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input 
                    className="w-full bg-secondary dark:bg-[#16181C] border-none rounded-full py-2.5 pl-12 pr-4 text-sm outline-none focus:ring-1 focus:ring-primary" 
                    placeholder="Search Direct Messages" 
                  />
                </div>
              </div>
            </div>

            <div className="pb-20">
              {dummyConversations.map(conv => (
                <ConversationItem 
                  key={conv.id} 
                  conversation={conv} 
                  active={selectedChat?.id === conv.id}
                  onClick={() => setSelectedChat(conv)}
                />
              ))}
            </div>
          </main>

          {/* Chat Detail Pane - Overlay on Mobile, Side-by-side on Desktop */}
          <div className={cn(
            "fixed md:relative inset-0 md:flex-1 bg-background z-[60] md:z-10 flex flex-col transition-all duration-300 ease-in-out transform",
            "md:border-r border-border dark:border-[#2F3336]", 
            selectedChat ? "translate-x-0 opacity-100" : "translate-x-full md:translate-x-0 opacity-0 md:opacity-100 md:hidden"
          )}>
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <header className="sticky top-0 bg-background/80 backdrop-blur-md border-b border-border dark:border-[#2F3336] p-4 flex items-center justify-between z-10">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => setSelectedChat(null)}
                      className="md:hidden p-1 -ml-1 hover:bg-secondary rounded-full transition-colors"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <div className="flex items-center gap-3 cursor-pointer">
                      <img alt="Avatar" className="w-8 h-8 rounded-full object-cover" src={selectedChat.user.avatar} />
                      <div className="flex flex-col leading-none">
                        <span className="font-bold text-sm hover:underline">{selectedChat.user.name}</span>
                        <span className="text-xs text-muted-foreground">{selectedChat.user.handle}</span>
                      </div>
                    </div>
                  </div>
                  <Info className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-primary transition-colors" />
                </header>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
                  <div className="flex flex-col items-center py-8 border-b border-border mb-4 text-center">
                    <img alt="Avatar" className="w-16 h-16 rounded-full object-cover mb-2" src={selectedChat.user.avatar} />
                    <h3 className="font-black text-lg">{selectedChat.user.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{selectedChat.user.handle}</p>
                    <p className="text-sm text-muted-foreground max-w-xs">
                      Joined December 2021 · 1.2M Followers
                    </p>
                  </div>

                  {/* Dummy Chat History */}
                  <div className="flex justify-start">
                    <div className="bg-secondary dark:bg-[#16181C] p-3 rounded-2xl rounded-tl-none max-w-[80%] text-sm">
                      {selectedChat.lastMessage}
                    </div>
                  </div>
                  <div className="flex justify-end">
                    <div className="bg-primary text-white p-3 rounded-2xl rounded-tr-none max-w-[80%] text-sm shadow-md">
                      Hey! Thanks for reaching out. Let's talk about the summit details.
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <footer className="p-3 border-t border-border dark:border-[#2F3336] flex items-center gap-2 bg-background">
                  <div className="flex items-center text-primary">
                    <IconButton icon={ImageIcon} />
                    <IconButton icon={Smile} />
                  </div>
                  <div className="flex-1 relative">
                    <input 
                      className="w-full bg-secondary dark:bg-[#16181C] border-none rounded-2xl py-2 px-4 text-sm outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Start a new message"
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                    />
                  </div>
                  <button 
                    disabled={!messageText.trim()}
                    className={cn(
                      "p-2 rounded-full transition-colors",
                      messageText.trim() ? "bg-primary text-white shadow-sm" : "text-primary opacity-50 cursor-not-allowed"
                    )}
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </footer>
              </>
            ) : (
              /* Empty State for Desktop */
              <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-background">
                <h2 className="text-3xl font-black mb-2 tracking-tight">Select a message</h2>
                <p className="text-muted-foreground max-w-sm mb-6">
                  Choose from your existing conversations, or start a new one.
                </p>
                <button className="bg-primary hover:bg-primary-hover text-white font-bold px-6 py-3 rounded-full transition-all shadow-md active:scale-95">
                  New Message
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function ConversationItem({ conversation, active, onClick }: { conversation: Conversation, active: boolean, onClick: () => void }) {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "flex gap-3 px-4 py-4 border-b border-border dark:border-[#2F3336] hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer transition-colors relative",
        active ? "border-r-4 border-r-primary bg-primary/5" : ""
      )}
    >
      <div className="relative flex-shrink-0">
        <img alt="Avatar" className="w-12 h-12 rounded-full object-cover" src={conversation.user.avatar} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 min-w-0">
            <span className="font-bold text-sm truncate">{conversation.user.name}</span>
            {conversation.user.verified && (
              <i className="fas fa-check-circle text-primary text-[10px]"></i>
            )}
            <span className="text-muted-foreground text-sm truncate ml-1">{conversation.user.handle}</span>
            <span className="text-muted-foreground text-sm flex-shrink-0">· {conversation.timestamp}</span>
          </div>
          {conversation.unreadCount && !active && (
            <div className="w-2 h-2 rounded-full bg-primary shadow-sm"></div>
          )}
        </div>
        <p className={cn(
          "text-sm truncate mt-0.5",
          conversation.unreadCount && !active ? "font-bold text-foreground" : "text-muted-foreground"
        )}>
          {conversation.lastMessage}
        </p>
      </div>
    </div>
  );
}

function IconButton({ icon: Icon }: { icon: any }) {
  return (
    <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
      <Icon className="w-5 h-5" />
    </button>
  );
}
