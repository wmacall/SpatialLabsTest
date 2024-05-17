import React from 'react';
import {FlatList, View} from 'react-native';
import {AccountCard} from '../../../components';
import {useSelector} from 'react-redux';
import {getSocialMedia} from '../../../store';
import styles from './Home.screen.styles';

export const HomeScreen = () => {
  const socialMedia = useSelector(getSocialMedia);
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        contentContainerStyle={styles.contentContainerStyle}
        data={[...socialMedia, ...socialMedia, ...socialMedia, ...socialMedia]}
        keyExtractor={(item, index) => `${item.name}-${index}`}
        renderItem={({item, index}) => (
          <AccountCard isOdd={index % 2 === 0} {...item} />
        )}
      />
    </View>
  );
};
