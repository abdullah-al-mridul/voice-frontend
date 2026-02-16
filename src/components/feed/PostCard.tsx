
'use client';

import { type Post } from '@/lib/dummy-data';
import Link from 'next/link';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link 
      href={`/post/${post.id}`}
      className="bg-white/80 dark:bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-sm border border-white/20 dark:border-white/10 transition-shadow cursor-pointer hover:shadow-md block"
    >
      <div className="flex items-center gap-2 mb-3">
        <img 
          alt={`${post.user.name} Avatar`} 
          className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 object-cover" 
          src={post.user.avatar} 
        />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-sm text-black dark:text-white">{post.user.name}</span>
            {post.user.verified && (
              <i className={`fas fa-check-circle ${post.user.verifiedColor || 'text-primary'} text-xs`}></i>
            )}
          </div>
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
          {post.link.description && (
            <div className="w-16 h-16 flex-shrink-0 bg-gray-100 dark:bg-gray-900 rounded overflow-hidden">
               <img src={`https://picsum.photos/seed/${post.id}/100/100`} alt="Link thumbnail" className="w-full h-full object-cover" />
            </div>
          )}
          <div className="flex flex-col justify-center min-w-0">
            <div className="text-[10px] text-subtext-light dark:text-subtext-dark mb-1 flex items-center gap-1 truncate">
              <i className="fas fa-link text-xs"></i> {post.link.display}
            </div>
            <div className="text-xs font-bold leading-tight text-black dark:text-white truncate">{post.link.title}</div>
            {post.link.description && (
              <div className="text-[10px] text-subtext-light dark:text-subtext-dark mt-1 truncate">{post.link.description}</div>
            )}
          </div>
        </div>
      )}
    </Link>
  );
}
