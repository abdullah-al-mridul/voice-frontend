
export interface Post {
  id: string;
  user: {
    name: string;
    handle: string;
    avatar: string;
    verified?: boolean;
    verifiedColor?: string;
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

export const dummyPosts: Post[] = [
  {
    id: '1',
    user: {
      name: 'Tech Insider',
      handle: '@techinsider',
      avatar: 'https://picsum.photos/seed/tech/100/100',
      verified: true,
      verifiedColor: 'text-primary'
    },
    content: 'The future of web development is becoming increasingly reliant on AI-assisted tools. Are we ready for the shift? 🚀 #WebDev #AI #TechTrends',
    image: 'https://picsum.photos/seed/cyberpunk/800/600',
    timestamp: '2h',
    isPinned: true,
    stats: { comments: 45, reposts: 124, likes: 892 }
  },
  {
    id: '2',
    user: {
      name: 'Alex Rivet',
      handle: '@arivet_design',
      avatar: 'https://picsum.photos/seed/designer/100/100',
    },
    content: 'Just launched my new portfolio! Check it out and let me know what you think. Minimalism is key this year. 🎨',
    timestamp: '4h',
    stats: { comments: 12, reposts: 5, likes: 42 }
  },
  {
    id: '3',
    user: {
      name: 'Sarah Connor',
      handle: '@s_connor',
      avatar: 'https://picsum.photos/seed/woman/100/100',
      verified: true,
      verifiedColor: 'text-primary'
    },
    content: 'Beautiful sunset in California today. Nature is healing. 🌅',
    image: 'https://picsum.photos/seed/sunset/800/500',
    timestamp: '5h',
    stats: { comments: 220, reposts: 560, likes: 2300 }
  },
  {
    id: '4',
    user: {
      name: 'SportsCenter',
      handle: '@sportscenter',
      avatar: 'https://picsum.photos/seed/sports/100/100',
      verified: true,
      verifiedColor: 'text-primary'
    },
    content: 'Major upset in the tennis world today! The finals are going to be absolutely historic. Who are you rooting for? 🎾',
    image: 'https://picsum.photos/seed/tennis/600/400',
    timestamp: '7h',
    stats: { comments: 88, reposts: 210, likes: 1500 }
  }
];

export const trendingTopics: TrendingTopic[] = [
  { id: '1', category: 'Politics · Trending', topic: '#Election2024', postsCount: '1.2M VOICEs' },
  { id: '2', category: 'Technology · Trending', topic: 'OpenAI', postsCount: '450K VOICEs' },
  { id: '3', category: 'Sports · Trending', topic: 'Super Bowl', postsCount: '890K VOICEs' },
  { id: '4', category: 'Entertainment · Trending', topic: 'Oscars 2026', postsCount: '120K VOICEs' }
];

export const followSuggestions: FollowSuggestion[] = [
  { id: '1', name: 'Elon Musk', handle: '@elonmusk', avatar: 'https://picsum.photos/seed/elon/100/100', verified: true },
  { id: '2', name: 'Daily News', handle: '@dailynews', avatar: 'https://picsum.photos/seed/news/100/100', verified: true },
  { id: '3', name: 'Art Gallery', handle: '@art_world', avatar: 'https://picsum.photos/seed/art/100/100' }
];

export const dummyNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'like',
    user: {
      name: 'Elon Musk',
      handle: '@elonmusk',
      avatar: 'https://picsum.photos/seed/elon/100/100'
    },
    content: 'The future of web development is becoming increasingly reliant on AI-assisted tools.',
    timestamp: '10m'
  },
  {
    id: 'n6',
    type: 'reply',
    user: {
      name: 'Alex Rivera',
      handle: '@arivera',
      avatar: 'https://picsum.photos/seed/alex/100/100'
    },
    content: 'This is absolutely true! AI is the future of our industry.',
    timestamp: '25m'
  },
  {
    id: 'n2',
    type: 'repost',
    user: {
      name: 'Sarah Connor',
      handle: '@s_connor',
      avatar: 'https://picsum.photos/seed/woman/100/100'
    },
    content: 'The future of web development is becoming increasingly reliant on AI-assisted tools.',
    timestamp: '1h'
  },
  {
    id: 'n3',
    type: 'follow',
    user: {
      name: 'Daily News',
      handle: '@dailynews',
      avatar: 'https://picsum.photos/seed/news/100/100'
    },
    timestamp: '3h'
  },
  {
    id: 'n7',
    type: 'like',
    user: {
      name: 'Tech Insider',
      handle: '@techinsider',
      avatar: 'https://picsum.photos/seed/tech/100/100'
    },
    content: 'Just launched my new portfolio!',
    timestamp: '4h'
  },
  {
    id: 'n4',
    type: 'mention',
    user: {
      name: 'Alex Rivet',
      handle: '@arivet_design',
      avatar: 'https://picsum.photos/seed/designer/100/100'
    },
    content: 'Hey @johndoe, check out my new portfolio! What do you think?',
    timestamp: '5h'
  },
  {
    id: 'n8',
    type: 'reply',
    user: {
      name: 'Sarah Connor',
      handle: '@s_connor',
      avatar: 'https://picsum.photos/seed/woman/100/100'
    },
    content: 'I love the minimalism approach you took here.',
    timestamp: '6h'
  },
  {
    id: 'n5',
    type: 'verify',
    user: {
      name: 'VOICE Support',
      handle: '@voice_support',
      avatar: 'https://picsum.photos/seed/voice/100/100'
    },
    content: 'Your account has been successfully verified. Welcome to the elite community!',
    timestamp: '1d'
  }
];

export const dummyConversations: Conversation[] = [
  {
    id: 'c1',
    user: { name: 'Elon Musk', handle: '@elonmusk', avatar: 'https://picsum.photos/seed/elon/100/100', verified: true },
    lastMessage: 'The new rockets are looking good. We should discuss the timeline.',
    timestamp: '2h',
    unreadCount: 1
  },
  {
    id: 'c2',
    user: { name: 'Sarah Connor', handle: '@s_connor', avatar: 'https://picsum.photos/seed/woman/100/100', verified: true },
    lastMessage: 'See you at the conference tomorrow!',
    timestamp: '5h'
  },
  {
    id: 'c3',
    user: { name: 'Tech Insider', handle: '@techinsider', avatar: 'https://picsum.photos/seed/tech/100/100', verified: true },
    lastMessage: 'Did you check the latest benchmarks for Gemini 2.5?',
    timestamp: '1d'
  },
  {
    id: 'c4',
    user: { name: 'Alex Rivet', handle: '@arivet_design', avatar: 'https://picsum.photos/seed/designer/100/100' },
    lastMessage: 'I sent you the logo files. Let me know if you need any changes.',
    timestamp: '2d'
  },
  {
    id: 'c5',
    user: { name: 'Daily News', handle: '@dailynews', avatar: 'https://picsum.photos/seed/news/100/100', verified: true },
    lastMessage: 'Breaking: New tech hub announced in Austin.',
    timestamp: '3d'
  }
];
