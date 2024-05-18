import React, {useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import {
  AccountCard,
  AddAccount,
  Button,
  Icon,
  Typography,
} from '../../../components';
import {useSelector} from 'react-redux';
import {SocialMedia, getProfileSelector, getSocialMedia} from '../../../store';
import DotBlack from '../../../assets/img/dot_black.png';
import styles from './Home.screen.styles';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {theme} from '../../../utils';
import {useNavigation} from '@react-navigation/native';
import {AppStackRouter, AppStackRoutes} from '../../../routes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const HomeScreen = () => {
  const socialMedia = useSelector(getSocialMedia);
  const {username, bio, photo} = useSelector(getProfileSelector);
  const {bottom} = useSafeAreaInsets();
  const {navigate} = useNavigation<NativeStackNavigationProp<AppStackRouter>>();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState<SocialMedia | null>(null);

  const handleNavigateToProfile = () => {
    navigate(AppStackRoutes.PROFILE);
  };
  const handleSelectSocialMedia = (media: SocialMedia) => {
    setSelectedMedia(media);
    setIsVisible(true);
  };

  return (
    <View style={styles.container}>
      <AddAccount
        selectedMedia={selectedMedia}
        isVisible={isVisible}
        onClose={() => setIsVisible(false)}
      />
      <View style={styles.containerHeader}>
        <View style={styles.row}>
          <TouchableOpacity
            onPress={handleNavigateToProfile}
            activeOpacity={0.6}>
            {photo ? (
              <Image
                style={styles.imageUser}
                resizeMode="cover"
                source={{uri: photo}}
              />
            ) : (
              <View style={styles.defaultImage}>
                <Icon name="UserIcon" />
              </View>
            )}
          </TouchableOpacity>
          <View style={styles.containerInfo}>
            <Typography variant="h6">{username}</Typography>
            <Typography variant="small">{bio}</Typography>
          </View>
        </View>
        <Image source={DotBlack} resizeMode="contain" />
      </View>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        data={socialMedia}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({item, index}) => (
          <AccountCard
            onPress={() => handleSelectSocialMedia(item)}
            isOdd={index % 2 === 0}
            {...item}
          />
        )}
      />
      <View
        style={[
          styles.containerButton,
          {bottom: bottom + theme.scaleHeight(27)},
        ]}>
        <Button
          onPress={() => setIsVisible(true)}
          icon="AddIcon"
          buttonColor="GREEN"
          variant="rounded"
        />
      </View>
    </View>
  );
};
