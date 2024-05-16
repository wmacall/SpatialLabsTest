import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Icon, Typography} from './src/components';
import {COLORS} from './src/constants';

const App = () => {
  return (
    <View style={{backgroundColor: COLORS.MONOCHROME_600, flex: 1}}>
      <SafeAreaView />
      <Typography variant="h3">Hello World!</Typography>
      <Typography variant="h4">Hello World!</Typography>
      <Typography variant="h5">Hello World!</Typography>
      <Typography variant="h6">Hello World!</Typography>
      <Typography variant="paragraph">Hello World!</Typography>
      <Typography variant="small">Hello World!</Typography>
      <Icon name="AddIcon" />
      <Icon name="BackArrowIcon" />
      <Icon name="CloseIcon" />
      <Icon name="DoneIcon" />
      <Icon name="DotsIcon" />
      <Icon name="EditIcon" />
      <Icon name="LogoutIcon" />
      <Icon name="UploadIcon" />
      <Icon name="UserIcon" />
    </View>
  );
};

export default App;
