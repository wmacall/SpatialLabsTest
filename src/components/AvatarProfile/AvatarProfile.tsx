import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {Icon} from '../Icon';
import {Button} from '../Button';
import styles from './AvatarProfile.styles';

interface AvatarProfileProps {
  photo?: string;
  handlePressUpdatePhoto: () => void;
}

export const AvatarProfile = ({
  photo,
  handlePressUpdatePhoto,
}: AvatarProfileProps) => {
  return (
    <TouchableOpacity
      onPress={handlePressUpdatePhoto}
      style={styles.containerUserImage}>
      {photo ? (
        <Image source={{uri: photo}} style={styles.userImage} />
      ) : (
        <Icon name="UserIcon" />
      )}
      <Button
        icon="UploadIcon"
        style={styles.editIcon}
        variant="rounded_small"
        buttonColor="PRIMARY"
      />
    </TouchableOpacity>
  );
};
