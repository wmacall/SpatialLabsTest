import {SocialMediaData, SocialNetwork} from '../constants';

export const formatSocialNetworks = (
  socialMedia: SocialNetwork[],
): SocialMediaData[] => {
  return socialMedia.flatMap(section => section.data);
};
