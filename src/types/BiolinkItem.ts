export interface BiolinkItem {
  name: string;
  url?: string;
  slug?: string;
  icon?: string;
  bgColor?: string;
  textColor?: string;
  youtubeId?: string;
  spotifyUrl?: string;
  soundcloudUrl?: string;
  tiktokId?: string;
  instagramId?: string;
  links?: BiolinkItem[];
}
