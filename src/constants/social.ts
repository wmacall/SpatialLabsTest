import {IconName} from '../components';

export interface SocialMediaData {
  name: string;
  icon: IconName;
}

export interface SocialNetwork {
  title: string;
  data: SocialMediaData[];
}

export const SOCIAL_MEDIA: SocialNetwork[] = [
  {
    title: 'Social Media',
    data: [
      {
        name: 'Instagram',
        icon: 'InstagramIcon',
      },
      {
        name: 'TikTok',
        icon: 'TiktokIcon',
      },
      {
        name: 'Reedit',
        icon: 'RedditIcon',
      },
      {
        name: 'LinkedIn',
        icon: 'LinkedinIcon',
      },
      {
        name: 'Snapchat',
        icon: 'SnapchatIcon',
      },
      {
        name: 'X',
        icon: 'XIcon',
      },
      {
        name: 'Facebook',
        icon: 'FacebookIcon',
      },
      {
        name: 'Threads',
        icon: 'ThreadsIcon',
      },
    ],
  },
  {
    title: 'Video',
    data: [
      {
        name: 'YouTube',
        icon: 'YoutubeIcon',
      },
      {
        name: 'Twitch',
        icon: 'TwitchIcon',
      },
    ],
  },
  {
    title: 'Messaging',
    data: [
      {
        name: 'Telegram',
        icon: 'TelegramIcon',
      },
      {
        name: 'WhatsApp',
        icon: 'WhatsAppIcon',
      },
      {
        name: 'Line',
        icon: 'LineIcon',
      },
    ],
  },
  {
    title: 'Music',
    data: [
      {
        name: 'Spotify',
        icon: 'SpotifyIcon',
      },
      {
        name: 'Apple Music',
        icon: 'AppleMusicIcon',
      },
      {
        name: 'SoundCloud',
        icon: 'SoundCloudIcon',
      },
      {
        name: 'Tidal',
        icon: 'TidalIcon',
      },
    ],
  },
  {
    title: 'E-commerce',
    data: [
      {
        name: 'Shopify',
        icon: 'ShopifyIcon',
      },
      {
        name: 'Etsy',
        icon: 'EtsyIcon',
      },
    ],
  },
  {
    title: 'Publishing',
    data: [
      {
        name: 'Medium',
        icon: 'MediumIcon',
      },
      {
        name: 'Substack',
        icon: 'SubstackIcon',
      },
    ],
  },
  {
    title: 'Design',
    data: [
      {
        name: 'Behance',
        icon: 'BehanceIcon',
      },
      {
        name: 'Dribbble',
        icon: 'DribbbleIcon',
      },
      {
        name: 'Pinterest',
        icon: 'PinterestIcon',
      },
      {
        name: 'Figma',
        icon: 'FigmaIcon',
      },
    ],
  },
  {
    title: 'Coding',
    data: [
      {
        name: 'GitHub',
        icon: 'GitHubIcon',
      },
    ],
  },
];
