import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Typography} from '../Typography';
import {Icon} from '../Icon';
import styles from './SectionHeader.styles';

interface SectionHeaderProps {
  title: string;
  handleToggle: (title: string) => void;
}

export const SectionHeader = ({title, handleToggle}: SectionHeaderProps) => {
  const [rotate, setRotate] = useState(false);
  const onToggle = () => {
    setRotate(prev => !prev);
    handleToggle(title);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onToggle}>
      <Typography variant="h5">{title}</Typography>
      <View style={rotate ? styles.arrow : styles.arrowDefault}>
        <Icon name="BackArrowIcon" />
      </View>
    </TouchableOpacity>
  );
};
