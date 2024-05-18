import {IconName} from '../components';
import {SocialMediaData, SocialNetwork} from '../constants';
import {SocialMedia} from '../store';

export const formatSocialNetworks = (
  socialMedia: SocialNetwork[],
): SocialMediaData[] => {
  return socialMedia.flatMap(section => section.data);
};

export const onFormatSocialNetworks = (
  socialMedia: SocialMedia | null,
): SocialMediaData | null => {
  if (socialMedia) {
    return {
      icon: socialMedia.icon as IconName,
      name: socialMedia.name,
    };
  }
  return null;
};
