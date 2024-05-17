import React, {useState} from 'react';
import {View} from 'react-native';
import {translate} from '../../i18n';
import {Typography} from '../Typography';
import {Button} from '../Button';
import {Input} from '../Input';
import {Icon} from '../Icon';
import styles from './CreateProfile.styles';
import {useAppDispatch} from '../../hooks';
import {onUpdateProfile} from '../../store';
import {useSelector} from 'react-redux';

export const CreateProfile = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [photo, setPhoto] = useState('');
  const dispatch = useAppDispatch();
  const a = useSelector(state => state.profile);
  console.log(a);

  const handleFinishProfile = () => {
    dispatch(
      onUpdateProfile({
        name,
        bio,
        photo,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Typography style={styles.title}>
        {translate('create_your_profile')}
      </Typography>
      <Typography variant="h5" style={styles.description}>
        {translate('create_your_profile_description')}
      </Typography>
      <View style={styles.containerUserImage}>
        <Icon name="UserIcon" />
        <Button
          icon="EditIcon"
          style={styles.editIcon}
          onPress={() => {}}
          variant="rounded_small"
          buttonColor="PRIMARY"
        />
      </View>
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
        <Button text={translate('next')} onPress={handleFinishProfile} />
      </View>
    </View>
  );
};
