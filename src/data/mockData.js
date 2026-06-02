export const creator = {
  name: 'Your Name Here',
  tagline: 'Content Creator · Storyteller · Digital Artist',
  description:
    'I create content that inspires, educates, and entertains. From cinematic YouTube videos to raw behind-the-scenes moments, I bring ideas to life.',
  bio: `Hi, I'm Your Name Here — a full-time content creator based in [City], [Country]. I've been creating digital content for over 5 years, sharing my journey through videos, photos, and stories.

What started as a hobby quickly grew into a community of thousands who share my passion for creativity, technology, and personal growth. Whether I'm reviewing the latest gear, sharing productivity tips, or documenting my travels, I believe in authenticity above all.

When I'm not filming or editing, you'll find me exploring coffee shops, diving into a good book, or planning the next adventure. This space is where all of that comes together.`,
  featuredVideo: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
  socialLinks: [
    { name: 'YouTube', url: 'https://youtube.com', icon: '▶' },
    { name: 'Instagram', url: 'https://instagram.com', icon: '📷' },
    { name: 'TikTok', url: 'https://tiktok.com', icon: '🎵' },
    { name: 'Twitter / X', url: 'https://twitter.com', icon: '𝕏' },
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: '💼' },
  ],
};

export const contentItems = [
  {
    id: 1,
    type: 'video',
    title: 'How I Edit My Videos (Full Workflow)',
    thumbnail: 'https://picsum.photos/seed/video1/640/360',
    platform: 'YouTube',
    views: '124K',
    duration: '12:34',
  },
  {
    id: 2,
    type: 'video',
    title: 'My Morning Routine 2025',
    thumbnail: 'https://picsum.photos/seed/video2/640/360',
    platform: 'YouTube',
    views: '89K',
    duration: '8:21',
  },
  {
    id: 3,
    type: 'social',
    title: 'Behind the scenes of today\'s shoot 📸',
    thumbnail: 'https://picsum.photos/seed/social1/640/640',
    platform: 'Instagram',
    likes: '12.4K',
  },
  {
    id: 4,
    type: 'podcast',
    title: 'Ep 42: Building a Personal Brand',
    thumbnail: 'https://picsum.photos/seed/podcast1/640/360',
    platform: 'Spotify',
    duration: '45:12',
  },
  {
    id: 5,
    type: 'video',
    title: 'My Desk Setup Tour 2025',
    thumbnail: 'https://picsum.photos/seed/video3/640/360',
    platform: 'YouTube',
    views: '256K',
    duration: '15:47',
  },
  {
    id: 6,
    type: 'social',
    title: 'New project coming soon 👀',
    thumbnail: 'https://picsum.photos/seed/social2/640/640',
    platform: 'TikTok',
    likes: '45.7K',
  },
  {
    id: 7,
    type: 'podcast',
    title: 'Ep 41: Productivity Hacks That Work',
    thumbnail: 'https://picsum.photos/seed/podcast2/640/360',
    platform: 'Apple Podcasts',
    duration: '38:50',
  },
  {
    id: 8,
    type: 'video',
    title: 'I Spent 24 Hours in [City]',
    thumbnail: 'https://picsum.photos/seed/video4/640/360',
    platform: 'YouTube',
    views: '312K',
    duration: '22:15',
  },
  {
    id: 9,
    type: 'social',
    title: 'The setup is finally complete ✨',
    thumbnail: 'https://picsum.photos/seed/social3/640/640',
    platform: 'Instagram',
    likes: '8.9K',
  },
];

export const sponsorshipTiers = [
  {
    name: 'Bronze',
    price: '$500',
    description: 'Single social media shoutout including a dedicated post or story feature.',
    features: ['1 social media post', 'Story feature', 'Link in bio (7 days)'],
  },
  {
    name: 'Silver',
    price: '$1,500',
    description: 'Integrated product mention in one video plus social media amplification.',
    features: [
      'Product mention in video',
      'Dedicated social post',
      'Story feature',
      'Link in bio (14 days)',
      'Usage rights',
    ],
  },
  {
    name: 'Gold',
    price: '$3,500',
    description: 'Full dedicated video review or integration across YouTube and all social platforms.',
    features: [
      'Dedicated video',
      'Social media campaign',
      'Product integration',
      'Link in bio (30 days)',
      'Usage rights',
      'Analytics report',
    ],
  },
];

export const shopItems = [
  {
    id: 1,
    name: 'Lightroom Preset Pack — "Golden Hour"',
    description: '20 professional presets for warm, cinematic photos.',
    price: '$29',
    image: 'https://picsum.photos/seed/shop1/400/300',
    type: 'digital',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Video Editing Template Pack',
    description: '10 motion graphics templates for Adobe Premiere Pro.',
    price: '$49',
    image: 'https://picsum.photos/seed/shop2/400/300',
    type: 'digital',
    badge: 'New',
  },
  {
    id: 3,
    name: 'Content Creator Starter Guide',
    description: '50-page PDF guide to growing your audience.',
    price: '$19',
    image: 'https://picsum.photos/seed/shop3/400/300',
    type: 'digital',
  },
  {
    id: 4,
    name: 'My Camera Kit (Affiliate)',
    description: 'The exact gear I use to create my content.',
    price: 'Shop Now →',
    image: 'https://picsum.photos/seed/shop4/400/300',
    type: 'affiliate',
  },
];

export const stats = [
  { label: 'YouTube Subscribers', value: '245K' },
  { label: 'Total Views', value: '12M+' },
  { label: 'Instagram Followers', value: '89K' },
  { label: 'Podcast Downloads', value: '50K+' },
];