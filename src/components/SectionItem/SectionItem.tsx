import React, {useState} from 'react';
import {
  NativeSyntheticEvent,
  TextInputEndEditingEventData,
  TouchableOpacity,
  View,
} from 'react-native';
import {Typography} from '../Typography';
import {Input} from '../Input';
import styles from './SectionItem.styles';
import {translate} from '../../i18n';
import {Icon} from '../Icon';
import {
  SocialMedia,
  getSocialMedia,
  onAddSocialMedia,
  onRemoveSocialMedia,
} from '../../store';
import {useAppDispatch} from '../../hooks';
import {useSelector} from 'react-redux';

interface SectionItemProps extends Partial<SocialMedia> {}

export const SectionItem = ({name, icon}: SectionItemProps) => {
  const socialMedia = useSelector(getSocialMedia);
  const [username, setUsername] = useState(
    socialMedia.find(item => item.name === name)?.username || '',
  );
  const dispatch = useAppDispatch();

  const handleEndEditing = (
    event: NativeSyntheticEvent<TextInputEndEditingEventData>,
  ) => {
    if (username.length > 3) {
      dispatch(
        onAddSocialMedia({
          name: name || '',
          username: event.nativeEvent.text,
          icon: icon || '',
        }),
      );
    }
  };

  const handleRemoveSocialMedia = () => {
    setUsername('');
    dispatch(onRemoveSocialMedia(name || ''));
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerImage}>
        <Typography variant="h6">{icon}</Typography>
      </View>
      <View style={styles.containerSocial}>
        <View style={styles.containerInput}>
          <Typography variant="h6">@</Typography>
          <Input
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            placeholder={translate('username')}
            onEndEditing={handleEndEditing}
          />
        </View>
        {username.length > 3 ? (
          <View style={styles.containerIcons}>
            <Icon name="DoneIcon" />
            <TouchableOpacity
              onPress={handleRemoveSocialMedia}
              activeOpacity={0.2}
              style={styles.containerIcon}
              hitSlop={{
                bottom: 10,
                left: 10,
                right: 10,
                top: 10,
              }}>
              <Icon name="CloseIcon" />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </View>
  );
};
