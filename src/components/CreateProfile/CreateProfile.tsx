import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {translate} from '../../i18n';
import {Typography} from '../Typography';
import {Button} from '../Button';
import {Input} from '../Input';
import {Icon} from '../Icon';
import styles from './CreateProfile.styles';
import {useAppDispatch} from '../../hooks';
import {getProfileSelector, onUpdateProfile} from '../../store';
import {theme} from '../../utils';
import {ImagePicker} from '../ImagePicker';
import {useSelector} from 'react-redux';

interface CreateProfileProps {
  onIncrementStep: () => void;
}

export const CreateProfile = ({onIncrementStep}: CreateProfileProps) => {
  const {
    name: nameUser,
    bio: bioUser,
    photo: userPhoto,
  } = useSelector(getProfileSelector);
  const [name, setName] = useState(nameUser);
  const [bio, setBio] = useState(bioUser);
  const [photo, setPhoto] = useState<string | undefined>(userPhoto);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({x: 0, y: 0});
  const dispatch = useAppDispatch();
  const isValid = name.length > 3 && bio.length > 3;

  const handleFinishProfile = () => {
    dispatch(
      onUpdateProfile({
        name,
        bio,
        photo,
      }),
    );
    onIncrementStep();
  };

  const handlePressUpdatePhoto = () => {
    setContextMenuPosition({
      x: theme.scaleWidth(80),
      y: theme.scaleHeight(400),
    });
    setContextMenuVisible(true);
  };

  return (
    <View style={styles.container}>
      <ImagePicker
        isVisible={contextMenuVisible}
        contextMenuPosition={contextMenuPosition}
        onClose={() => setContextMenuVisible(false)}
        setPhoto={setPhoto}
      />
      <Typography style={styles.title}>
        {translate('create_your_profile')}
      </Typography>
      <Typography variant="h5" style={styles.description}>
        {translate('create_your_profile_description')}
      </Typography>
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
      <Input
        value={name}
        onChangeText={setName}
        placeholder={translate('name')}
      />
      <Input
        value={bio}
        onChangeText={setBio}
        style={styles.inputMultiline}
        multiline
        showLimit
        placeholder={translate('bio')}
      />
      <View style={styles.containerNextButton}>
        <Button
          isDisabled={!isValid}
          text={translate('next')}
          onPress={handleFinishProfile}
        />
      </View>
    </View>
  );
};
