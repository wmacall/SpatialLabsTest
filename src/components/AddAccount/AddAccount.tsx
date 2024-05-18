import React, {useEffect, useState} from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  TouchableOpacity,
  View,
} from 'react-native';
import {Typography} from '../Typography';
import styles from './AddAccount.styles';
import {Input} from '../Input';
import {translate} from '../../i18n';
import {Button} from '../Button';
import {Dropdown} from 'react-native-element-dropdown';
import {Icon} from '../Icon';
import {formatSocialNetworks, onFormatSocialNetworks} from '../../utils';
import {COLORS, SOCIAL_MEDIA, SocialMediaData} from '../../constants';
import {useAppDispatch} from '../../hooks';
import {SocialMedia, onAddSocialMedia, onRemoveSocialMedia} from '../../store';
const data = formatSocialNetworks(SOCIAL_MEDIA);

interface AddAccountProps {
  isVisible: boolean;
  onClose: () => void;
  selectedMedia: SocialMedia | null;
}

export const AddAccount = ({
  isVisible,
  onClose,
  selectedMedia = null,
}: AddAccountProps) => {
  const [username, setUsername] = useState(selectedMedia?.username || '');
  const [mediaSelected, setMediaSelected] = useState<SocialMediaData | null>(
    null,
  );
  const [showDelete, setShowDelete] = useState(false);
  const dispatch = useAppDispatch();

  const handleReset = () => {
    setUsername('');
    setMediaSelected(null);
    setShowDelete(false);
  };
  const handleClose = () => {
    onClose();
    handleReset();
  };
  const handleSaveSocialMedia = () => {
    if (mediaSelected && username) {
      dispatch(
        onAddSocialMedia({
          icon: mediaSelected.icon,
          name: mediaSelected.name,
          username,
        }),
      );
      handleClose();
    }
  };
  const handleRemoveSocialMedia = () => {
    dispatch(onRemoveSocialMedia(mediaSelected?.name || ''));
    handleClose();
  };

  useEffect(() => {
    if (selectedMedia) {
      setMediaSelected(onFormatSocialNetworks(selectedMedia));
      setUsername(selectedMedia.username);
      setShowDelete(true);
    }
  }, [selectedMedia]);

  return (
    <Modal visible={isVisible} transparent animationType="slide">
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <TouchableOpacity
          onPress={handleClose}
          activeOpacity={1}
          style={styles.overlay}
        />
        <View style={styles.containerModal}>
          <View style={styles.containerHeader}>
            <Typography variant="h5">{translate('account')}</Typography>
            <Button
              variant="rounded_medium"
              icon="DotsIcon"
              buttonColor="PRIMARY"
            />
          </View>
          <View style={styles.containerMedia}>
            {showDelete ? (
              <TouchableOpacity
                style={styles.containerRemove}
                onPress={handleRemoveSocialMedia}>
                <Typography variant="h6" textColor="RED">
                  {translate('delete')}
                </Typography>
              </TouchableOpacity>
            ) : null}
            <View style={styles.containerEmpty}>
              <View style={styles.logo}>
                {mediaSelected ? <Icon name={mediaSelected.icon} /> : null}
              </View>
              {username ? (
                <Typography variant="paragraph">@{username}</Typography>
              ) : (
                <View style={styles.username} />
              )}
            </View>
          </View>
          <View style={styles.containerInformation}>
            <Dropdown
              placeholder={translate('select_a_platform')}
              placeholderStyle={{color: COLORS.MONOCHROME_400}}
              onChange={item => setMediaSelected(item)}
              labelField="name"
              valueField="name"
              data={data}
              value={mediaSelected?.name}
              style={styles.dropdown}
              renderLeftIcon={() =>
                mediaSelected ? (
                  <View style={styles.containerLeftIcon}>
                    <Icon name={mediaSelected.icon} />
                  </View>
                ) : null
              }
              renderRightIcon={() => (
                <View style={styles.containerIcon}>
                  <Icon name="BackArrowIcon" />
                </View>
              )}
              renderItem={item => (
                <View style={styles.rowDropdown}>
                  <Icon name={item.icon} />
                  <Typography style={styles.socialName} variant="h6">
                    {item.name}
                  </Typography>
                </View>
              )}
            />
            <View style={styles.containerInput}>
              <Typography variant="h6">@</Typography>
              <Input
                value={username}
                onChangeText={setUsername}
                style={styles.input}
                maxLength={20}
                placeholder={translate('username')}
              />
            </View>
            <View style={styles.containerButtons}>
              <Button
                onPress={handleReset}
                variant="secondary"
                textVariant="paragraph"
                buttonColor="DARK_SECONDARY"
                text={translate('cancel')}
              />
              <Button
                isDisabled={!mediaSelected || username.length < 3}
                variant="secondary"
                textVariant="paragraph"
                buttonColor="BLACK"
                text={translate('save')}
                onPress={handleSaveSocialMedia}
              />
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
