import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Typography} from '../../../components';
import {useSelector} from 'react-redux';
import {getSocialMedia} from '../../../store';
import {useNavigation} from '@react-navigation/native';
import {AppStackRoutes} from '../../../routes';

export const HomeScreen = () => {
  const socialMedia = useSelector(getSocialMedia);
  const {navigate} = useNavigation();
  return (
    <View>
      <Typography>Home screen</Typography>
      <FlatList
        data={socialMedia}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({item}) => <Typography>{item.name}</Typography>}
      />
      <TouchableOpacity onPress={() => navigate(AppStackRoutes.PROFILE)}>
        <Typography>Go to Profile</Typography>
      </TouchableOpacity>
    </View>
  );
};
