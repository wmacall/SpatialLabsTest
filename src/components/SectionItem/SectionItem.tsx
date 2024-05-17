import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Typography} from '../Typography';
import {Input} from '../Input';
import styles from './SectionItem.styles';
import {translate} from '../../i18n';
import {Icon} from '../Icon';

export const SectionItem = ({item}: any) => {
  const [username, setUsername] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.containerImage} />
      <View style={styles.containerSocial}>
        <View style={styles.containerInput}>
          <Typography variant="h6">@</Typography>
          <Input
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            placeholder={translate('username')}
          />
        </View>
        {username.length > 3 ? (
          <View style={styles.containerIcons}>
            <Icon name="DoneIcon" />
            <TouchableOpacity
              onPress={() => setUsername('')}
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
