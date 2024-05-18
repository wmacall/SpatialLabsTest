import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  AvatarProfile,
  Icon,
  ImagePicker,
  Input,
  Typography,
} from '../../../../components';
import styles from './Profile.screen.styles';
import {theme} from '../../../../utils';
import {
  ProfileState,
  getProfileSelector,
  onSetUserInformation,
  resetProfile,
} from '../../../../store';
import {useSelector} from 'react-redux';
import {translate} from '../../../../i18n';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useAppDispatch} from '../../../../hooks';
import {useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  const {
    name: nameUser,
    bio: bioUser,
    photo: userPhoto,
    username,
  } = useSelector(getProfileSelector);
  const [user, setUser] = useState(username);
  const [name, setName] = useState(nameUser);
  const [bio, setBio] = useState(bioUser);
  const [photo, setPhoto] = useState<string | undefined>(userPhoto);
  const [contextMenuVisible, setContextMenuVisible] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState({x: 0, y: 0});
  const {bottom} = useSafeAreaInsets();
  const dispatch = useAppDispatch();
  const {goBack} = useNavigation();

  const handlePressUpdatePhoto = () => {
    setContextMenuPosition({
      x: theme.scaleWidth(80),
      y: theme.scaleHeight(250),
    });
    setContextMenuVisible(true);
  };
  const handleLogout = () => {
    dispatch(resetProfile());
  };
  const handleUpdateUserInformation = (
    key: keyof ProfileState,
    value: string,
  ) => {
    dispatch(
      onSetUserInformation({
        key,
        value,
      }),
    );
  };
  const handleUpdatePhoto = (newPhoto: string | undefined) => {
    setPhoto(newPhoto);
    dispatch(
      onSetUserInformation({
        key: 'photo',
        value: newPhoto || '',
      }),
    );
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={styles.container}>
        <ImagePicker
          isVisible={contextMenuVisible}
          contextMenuPosition={contextMenuPosition}
          onClose={() => setContextMenuVisible(false)}
          setPhoto={handleUpdatePhoto}
        />
        <View style={styles.containerHeader}>
          <TouchableOpacity
            hitSlop={{
              bottom: 20,
              left: 20,
              right: 20,
              top: 20,
            }}
            onPress={goBack}
            style={styles.buttonBack}>
            <Icon name="BackArrowIcon" />
          </TouchableOpacity>
          <Typography variant="h4">{translate('profile')}</Typography>
        </View>
        <AvatarProfile
          handlePressUpdatePhoto={handlePressUpdatePhoto}
          photo={photo}
        />
        <Input
          label={translate('username')}
          value={user}
          onChangeText={setUser}
          onEndEditing={event =>
            handleUpdateUserInformation('username', event.nativeEvent.text)
          }
        />
        <Input
          label={translate('name')}
          value={name}
          onChangeText={setName}
          onEndEditing={event =>
            handleUpdateUserInformation('name', event.nativeEvent.text)
          }
        />
        <Input
          label={translate('bio')}
          style={styles.inputMultiline}
          value={bio}
          onChangeText={setBio}
          multiline
          showLimit
          onEndEditing={event =>
            handleUpdateUserInformation('bio', event.nativeEvent.text)
          }
        />
      </ScrollView>
      <View
        style={[
          styles.containerButtonSignOut,
          {bottom: bottom + theme.scaleHeight(47)},
        ]}>
        <TouchableOpacity
          onPress={handleLogout}
          activeOpacity={0.6}
          style={styles.buttonSignOut}>
          <Typography variant="h6" textColor="RED">
            {translate('sign_out')}
          </Typography>
          <Icon name="LogoutIcon" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
