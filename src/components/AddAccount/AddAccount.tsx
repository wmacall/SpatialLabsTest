import React, {useState} from 'react';
import {KeyboardAvoidingView, Modal, View} from 'react-native';
import {Typography} from '../Typography';
import styles from './AddAccount.styles';
import {Input} from '../Input';
import {translate} from '../../i18n';
import {Button} from '../Button';

export const AddAccount = () => {
  const [username, setUsername] = useState('');
  return (
    <Modal visible transparent animationType="slide">
      <KeyboardAvoidingView behavior="height" style={styles.container}>
        <View style={styles.containerModal}>
          <View style={styles.containerHeader}>
            <Typography variant="h5">{translate('account')}</Typography>
            <Button
              variant="rounded_medium"
              icon="DotsIcon"
              buttonColor="PRIMARY"
            />
          </View>
          <View style={styles.containerInput} />
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
              variant="secondary"
              textVariant="paragraph"
              buttonColor="PRIMARY"
              text={translate('cancel')}
            />
            <Button
              variant="secondary"
              textVariant="paragraph"
              buttonColor="BLACK"
              text={translate('save')}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};
