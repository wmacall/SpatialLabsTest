import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Typography} from '../Typography';
import {Icon} from '../Icon';
import styles from './SectionHeader.styles';

interface SectionHeaderProps {
  title: string;
  handleToggle: (title: string) => void;
}

export const SectionHeader = ({title, handleToggle}: SectionHeaderProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() => handleToggle(title)}>
      <Typography variant="h5">{title}</Typography>
      <Icon name="BackArrowIcon" />
    </TouchableOpacity>
  );
};
