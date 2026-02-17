
export interface Post {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
    verifiedColor?: string;
    bio?: string;
    location?: string;
    website?: string;
    cover?: string;
  };
  content: string;
  image?: string;
  link?: {
    url: string;
    display: string;
    title: string;
    description?: string;
  };
  timestamp: string;
  stats: {
    comments: number;
    reposts: number;
    likes: number;
  };
  isPinned?: boolean;
}

export interface TrendingTopic {
  id: string;
  category: string;
  topic: string;
  postsCount: string;
}

export interface FollowSuggestion {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  verified?: boolean;
  bio?: string;
}

export interface Notification {
  id: string;
  type: 'like' | 'repost' | 'follow' | 'mention' | 'verify' | 'reply';
  user: {
    name: string;
    handle: string;
    avatar: string;
  };
  content?: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
  };
  lastMessage: string;
  timestamp: string;
  unreadCount?: number;
}

// Track if the app has performed its initial session check
export const appState = {
  hasInitialLoaded: false
};

const users = {
  creator: {
    name: 'John Doe',
    handle: '@johndoe',
    avatar: 'https://picsum.photos/seed/me/100/100',
    verified: true,
    bio: 'Creator & Maintainer of VOICE. Building the future of digital connection.',
    location: 'San Francisco, CA',
    website: 'voice.app/johndoe',
    cover: 'https://picsum.photos/seed/creator_cover/800/260'
  },
  tech: {
    name: 'Tech Insider',
    handle: '@techinsider',
    avatar: 'https://picsum.photos/seed/tech/100/100',
    verified: true,
    bio: 'Deep dives into AI, gadgets, and the future of tech. 💻',
    location: 'Silicon Valley',
    website: 'techinsider.io',
    cover: 'https://picsum.photos/seed/tech_cover/800/260'
  },
  artist: {
    name: 'Luna Ray',
    handle: '@lunar_art',
    avatar: 'https://picsum.photos/seed/art_user/100/100',
    bio: 'Digital artist focusing on surrealism and neon aesthetics. ✨',
    location: 'Tokyo, Japan',
    website: 'lunaray.art',
    cover: 'https://picsum.photos/seed/art_cover/800/260'
  },
  news: {
    name: 'Global Voice News',
    handle: '@global_voice',
    avatar: 'https://picsum.photos/seed/news_icon/100/100',
    verified: true,
    bio: 'Your source for unbiased world news and breaking stories. 🌍',
    location: 'London, UK',
    website: 'globalvoice.news',
    cover: 'https://picsum.photos/seed/news_cover/800/260'
  },
  chef: {
    name: 'Chef Marco',
    handle: '@marcos_kitchen',
    avatar: 'https://picsum.photos/seed/chef/100/100',
    bio: 'Sharing simple, delicious recipes for the modern home cook. 🍳',
    location: 'Rome, Italy',
    website: 'marco.cooks',
    cover: 'https://picsum.photos/seed/food_cover/800/260'
  },
  travel: {
    name: 'Nomad Sarah',
    handle: '@sarah_travels',
    avatar: 'https://picsum.photos/seed/traveler/100/100',
    bio: 'Exploring every corner of the world, one city at a time. ✈️',
    location: 'Everywhere',
    website: 'sarahnomad.com',
    cover: 'https://picsum.photos/seed/travel_cover/800/260'
  },
  sports: {
    name: 'SportZilla',
    handle: '@sportzilla',
    avatar: 'https://picsum.photos/seed/sports_man/100/100',
    verified: true,
    bio: 'Stats, highlights, and rumors from the world of sports. 🏀⚽️',
    location: 'New York, NY',
    website: 'sportzilla.com',
    cover: 'https://picsum.photos/seed/sports_cover/800/260'
  }
};

const basePosts: Post[] = [
  {
    id: '1',
    user: users.tech,
    content: 'Generative AI is moving faster than anyone predicted. The next 12 months will be wild. 🚀 #AI #FutureTech',
    image: 'https://picsum.photos/seed/ai_future/800/500',
    timestamp: '5m',
    stats: { comments: 124, reposts: 450, likes: 2300 }
  },
  {
    id: '2',
    user: users.artist,
    content: 'Just finished this new piece! Inspired by the cyberpunk vibes of Night City. What do you think? 🎨✨',
    image: 'https://picsum.photos/seed/cyberpunk_art/800/600',
    timestamp: '15m',
    stats: { comments: 45, reposts: 12, likes: 890 }
  },
  {
    id: '3',
    user: users.news,
    content: 'Breaking: New breakthrough in clean energy technology could power entire cities with zero emissions. 🌍⚡️ #GreenTech #BreakingNews',
    timestamp: '25m',
    stats: { comments: 560, reposts: 1200, likes: 5400 }
  },
  {
    id: '4',
    user: users.chef,
    content: 'Tonight\'s special: Handmade Fettuccine Carbonara. The secret is in the pecorino. 🍝😋 #ItalianFood #ChefLife',
    image: 'https://picsum.photos/seed/pasta_dish/800/500',
    timestamp: '45m',
    stats: { comments: 89, reposts: 34, likes: 1200 }
  },
  {
    id: '5',
    user: users.creator,
    content: 'Building VOICE has been an incredible journey. Thanks to everyone for the feedback! More features coming soon. 🛠️✨',
    timestamp: '1h',
    isPinned: true,
    stats: { comments: 230, reposts: 89, likes: 4500 }
  },
  {
    id: '6',
    user: users.travel,
    content: 'Waking up to this view in Santorini is something I will never get used to. 🇬🇷💙',
    image: 'https://picsum.photos/seed/santorini/800/500',
    timestamp: '1h',
    stats: { comments: 110, reposts: 56, likes: 3200 }
  },
  {
    id: '7',
    user: users.sports,
    content: 'What a game! Coming back from 20 points down to win at the buzzer. Legend status. 🏀🔥',
    timestamp: '2h',
    stats: { comments: 890, reposts: 2100, likes: 8900 }
  }
];

// Generate 120+ deterministic posts for testing hydration consistency
export const dummyPosts: Post[] = [
  ...basePosts,
  ...Array.from({ length: 120 }).map((_, i) => {
    const userKeys = Object.keys(users);
    // Use index-based selection instead of Math.random() for deterministic results
    const userKeyIndex = i % userKeys.length;
    const randomUser = users[userKeys[userKeyIndex] as keyof typeof users];
    
    const categories = ['Tech', 'Life', 'News', 'Art', 'Sports', 'Food', 'Nature', 'Space', 'Crypto', 'Gaming'];
    const categoryIndex = i % categories.length;
    const category = categories[categoryIndex];
    
    const id = `dynamic-${i}`;
    
    return {
      id,
      user: randomUser,
      content: `Post #${i + 8} about ${category}. Explore the latest trends in ${category} only on VOICE. What's your take on this? 🗣️ #${category} #VOICE #Trending`,
      timestamp: `${(i % 23) + 4}h`,
      image: i % 4 === 0 ? `https://picsum.photos/seed/post_${id}/800/500` : undefined,
      stats: {
        comments: (i * 13) % 500,
        reposts: (i * 27) % 1000,
        likes: (i * 41) % 5000
      }
    };
  })
];

export const trendingTopics: TrendingTopic[] = [
  { id: '1', category: 'Politics · Trending', topic: '#Election2024', postsCount: '1.2M VOICEs' },
  { id: '2', category: 'Technology · Trending', topic: 'OpenAI', postsCount: '450K VOICEs' },
  { id: '3', category: 'Sports · Trending', topic: 'Super Bowl', postsCount: '890K VOICEs' },
  { id: '4', category: 'Entertainment · Trending', topic: 'Oscars 2026', postsCount: '120K VOICEs' },
  { id: '5', category: 'Science · Trending', topic: 'Mars Rover', postsCount: '230K VOICEs' }
];

export const followSuggestions: FollowSuggestion[] = [
  { id: '1', name: users.tech.name, handle: users.tech.handle, avatar: users.tech.avatar, verified: true, bio: users.tech.bio },
  { id: '2', name: users.news.name, handle: users.news.handle, avatar: users.news.avatar, verified: true, bio: users.news.bio },
  { id: '3', name: users.artist.name, handle: users.artist.handle, avatar: users.artist.avatar, bio: users.artist.bio },
  { id: '4', name: users.chef.name, handle: users.chef.handle, avatar: users.chef.avatar, bio: users.chef.bio }
];

export const dummyNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'like',
    user: users.tech,
    content: 'Building VOICE has been an incredible journey.',
    timestamp: '10m'
  },
  {
    id: 'n6',
    type: 'reply',
    user: users.sports,
    content: 'This is absolutely true! AI is the future of our industry.',
    timestamp: '25m'
  }
];

export const dummyConversations: Conversation[] = [
  {
    id: 'c1',
    user: users.tech,
    lastMessage: 'The new rockets are looking good. We should discuss the timeline.',
    timestamp: '2h',
    unreadCount: 1
  }
];
