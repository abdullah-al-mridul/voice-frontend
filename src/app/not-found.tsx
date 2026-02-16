
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-background text-foreground">
      <div className="max-w-md w-full space-y-6">
        <div className="flex justify-center mb-8">
          <Link href="/">
            <span className="text-primary font-black text-5xl tracking-tighter">
              VOICE<span className="text-[#2DD0B3]">.</span>
            </span>
          </Link>
        </div>
        
        <div className="space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Hmm...this page doesn't exist.
          </h2>
          <p className="text-muted-foreground text-base">
            Try searching for something else or return to your feed to see what's happening.
          </p>
        </div>
        
        <div className="pt-4">
          <Link href="/feed">
            <Button className="bg-primary hover:bg-primary-hover text-white rounded-full px-8 py-6 text-base font-bold shadow-sm transition-all active:scale-95 border-none">
              Go to Feed
            </Button>
          </Link>
        </div>

        <div className="pt-12 flex justify-center gap-4 text-xs text-muted-foreground">
          <Link href="#" className="hover:underline">Help Center</Link>
          <Link href="#" className="hover:underline">Terms of Service</Link>
          <Link href="#" className="hover:underline">Privacy Policy</Link>
          <Link href="#" className="hover:underline">Cookie Policy</Link>
        </div>
        
        <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest pt-4">
          © 2024 VOICE Corp.
        </p>
      </div>
    </div>
  );
}
