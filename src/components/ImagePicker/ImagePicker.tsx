import React from 'react';
import {Modal, TouchableOpacity, View} from 'react-native';
import {
  CameraOptions,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
import {Typography} from '../Typography';
import {translate} from '../../i18n';
import {Icon} from '../Icon';
import styles from './ImagePicker.styles';
const options: CameraOptions = {
  mediaType: 'photo',
  quality: 0.5,
};

interface ImagePickerProps {
  isVisible: boolean;
  contextMenuPosition: {x: number; y: number};
  onClose: () => void;
  setPhoto: (photo: string | undefined) => void;
}

export const ImagePicker = ({
  isVisible,
  contextMenuPosition,
  onClose,
  setPhoto,
}: ImagePickerProps) => {
  const handleTakePhoto = async () => {
    const result = await launchCamera(options);
    console.log(result);
  };
  const handleChooseFromLibrary = async () => {
    const result = await launchImageLibrary(options);
    if (result.assets && result.assets[0]) {
      setPhoto(result.assets[0].uri);
      onClose();
    }
  };
  return (
    <Modal animationType="fade" visible={isVisible} transparent>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.overlay}
        onPress={onClose}
      />
      <View
        style={[
          styles.containerPicker,
          {
            top: contextMenuPosition.y,
            left: contextMenuPosition.x,
          },
        ]}>
        <TouchableOpacity style={styles.row} onPress={handleChooseFromLibrary}>
          <Typography variant="h6">{translate('photo_library')}</Typography>
          <Icon name="GalleryIcon" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.row} onPress={handleTakePhoto}>
          <Typography variant="h6">{translate('take_photo')}</Typography>
          <Icon name="PhotoIcon" />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
