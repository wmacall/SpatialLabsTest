import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Typography} from '../Typography';
import {SocialMedia} from '../../store';
import {Icon, IconName} from '../Icon';
import styles from './AccountCard.styles';

interface AccountCardProps extends SocialMedia {
  isOdd?: boolean;
  onPress: () => void;
}

export const AccountCard = ({
  icon,
  username,
  isOdd = false,
  onPress,
}: AccountCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={[styles.container, isOdd && styles.containerOdd]}>
      <Icon name={icon as IconName} />
      <Typography variant="paragraph">@{username}</Typography>
    </TouchableOpacity>
  );
};
