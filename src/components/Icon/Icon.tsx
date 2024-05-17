import React from 'react';
import * as Icons from '../../assets';
import {SvgProps} from 'react-native-svg';

export type IconName = keyof typeof Icons;

export interface IconProps extends SvgProps {
  name: keyof typeof Icons;
}

const IconNames = {
  AddIcon: Icons.AddIcon,
  BackArrowIcon: Icons.BackArrowIcon,
  CloseIcon: Icons.CloseIcon,
  DoneIcon: Icons.DoneIcon,
  DotsIcon: Icons.DotsIcon,
  EditIcon: Icons.EditIcon,
  LogoutIcon: Icons.LogoutIcon,
  UploadIcon: Icons.UploadIcon,
  UserIcon: Icons.UserIcon,
  PhotoIcon: Icons.PhotoIcon,
  GalleryIcon: Icons.GalleryIcon,
  FacebookIcon: Icons.FacebookIcon,
  InstagramIcon: Icons.InstagramIcon,
  LinkedinIcon: Icons.LinkedinIcon,
  RedditIcon: Icons.RedditIcon,
  SnapchatIcon: Icons.SnapchatIcon,
  TelegramIcon: Icons.TelegramIcon,
  ThreadsIcon: Icons.ThreadsIcon,
  TiktokIcon: Icons.TiktokIcon,
  TwitchIcon: Icons.TwitchIcon,
  XIcon: Icons.XIcon,
  YoutubeIcon: Icons.YoutubeIcon,
  AppleMusicIcon: Icons.AppleMusicIcon,
  BehanceIcon: Icons.BehanceIcon,
  DribbbleIcon: Icons.DribbbleIcon,
  EtsyIcon: Icons.EtsyIcon,
  FigmaIcon: Icons.FigmaIcon,
  GitHubIcon: Icons.GitHubIcon,
  LineIcon: Icons.LineIcon,
  MediumIcon: Icons.MediumIcon,
  PinterestIcon: Icons.PinterestIcon,
  ShopifyIcon: Icons.ShopifyIcon,
  SoundCloudIcon: Icons.SoundCloudIcon,
  SpotifyIcon: Icons.SpotifyIcon,
  SubstackIcon: Icons.SubstackIcon,
  TidalIcon: Icons.TidalIcon,
  WhatsAppIcon: Icons.WhatsAppIcon,
};

export const Icon = ({name, ...rest}: IconProps) => {
  const IconSelected = IconNames[name];

  if (!IconSelected) {
    return null;
  }

  return <IconSelected {...rest} />;
};
