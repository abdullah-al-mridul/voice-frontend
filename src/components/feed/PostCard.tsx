
'use client';

import { type Post } from '@/lib/dummy-data';
import Link from 'next/link';
import { Calendar } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ScallopedBadge = ({ className, color = "#5A55F2" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 24 24" aria-label="Verified account" className={className}>
    <g>
      <path 
        d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.28 2.52-.81 3.91c-1.31.67-2.19 1.91-2.19 3.34s.88 2.67 2.19 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.27 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34z" 
        fill={color}
      />
      <path 
        d="M10.54 16.2l-3.53-3.53 1.06-1.06 2.47 2.47 6.13-6.13 1.06 1.06-7.19 7.19z" 
        fill="white"
      />
    </g>
  </svg>
);

interface PostCardProps {
  post: Post;
  currentUserHandle?: string;
}

export function PostCard({ post, currentUserHandle }: PostCardProps) {
  // Check if it's the current user (mocked as @johndoe) or dynamic
  const isMe = post.user.handle === '@johndoe' || (currentUserHandle && post.user.handle === currentUserHandle);
  const profileHref = isMe ? '/profile' : `/profile/${post.user.handle.replace('@', '')}`;

  return (
    <div className="bg-white/80 dark:bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/20 dark:border-white/10 transition-shadow cursor-pointer hover:shadow-md relative group">
      {/* Absolute overlay link for the post detail */}
      <Link 
        href={`/post/${post.id}`}
        className="absolute inset-0 z-0"
        aria-label={`View post by ${post.user.name}`}
      />
      
      <div className="relative z-10 pointer-events-none">
        <div className="flex items-center gap-2 mb-3">
          <Link 
            href={profileHref} 
            className="pointer-events-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              alt={`${post.user.name} Avatar`} 
              className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 object-cover hover:opacity-90 transition-opacity" 
              src={post.user.avatar} 
            />
          </Link>
          <div className="flex flex-col leading-tight">
            <Link 
              href={profileHref} 
              className="pointer-events-auto group/name flex items-center gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              <span className="font-bold text-sm text-black dark:text-white group-hover/name:underline">{post.user.name}</span>
              {post.user.verified && (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <span className="cursor-help">
                        {isMe ? (
                          <ScallopedBadge className="w-3.5 h-3.5" color="#FFD700" />
                        ) : (
                          <ScallopedBadge className="w-3.5 h-3.5" color="#5A55F2" />
                        )}
                      </span>
                    </TooltipTrigger>
                    <TooltipContent className="bg-background text-foreground border border-border p-4 rounded-xl shadow-2xl max-w-[280px]">
                       <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-2">
                            {isMe ? <ScallopedBadge className="w-5 h-5" color="#FFD700" /> : <ScallopedBadge className="w-5 h-5" color="#5A55F2" />}
                            <p className="font-bold text-sm">{isMe ? "Creator & Maintainer" : "Verified Account"}</p>
                          </div>
                          <p className="text-xs leading-relaxed opacity-80">
                            {isMe 
                              ? "This account is the official Creator and Maintainer of VOICE. It holds high authority within the platform ecosystem." 
                              : "This account is verified because it is notable in government, news, entertainment, or another designated category."}
                          </p>
                          <div className="h-px bg-border my-1" />
                          <div className="flex items-center gap-1.5 text-xs opacity-60">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>Verified since {isMe ? "June 2023" : "December 2021"}</span>
                          </div>
                        </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              )}
            </Link>
            <span className="text-xs text-subtext-light dark:text-subtext-dark">{post.user.handle}</span>
          </div>
        </div>
        
        <p className="text-sm mb-3 leading-relaxed text-black dark:text-gray-200">
          {post.content}
        </p>
        
        {post.image && (
          <div className="border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden mb-3">
            <div className="bg-gray-100 dark:bg-gray-900 relative">
              <img 
                alt="Post content" 
                className="w-full h-auto object-cover max-h-[300px]" 
                src={post.image} 
              />
            </div>
          </div>
        )}

        {post.link && (
          <div className="flex gap-3 border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden bg-white/40 dark:bg-black/20 p-2">
            <div className="flex flex-col justify-center min-w-0">
              <div className="text-[10px] text-subtext-light dark:text-subtext-dark mb-1 flex items-center gap-1 truncate">
                <i className="fas fa-link text-xs"></i> {post.link.display}
              </div>
              <div className="text-xs font-bold leading-tight text-black dark:text-white truncate">{post.link.title}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
