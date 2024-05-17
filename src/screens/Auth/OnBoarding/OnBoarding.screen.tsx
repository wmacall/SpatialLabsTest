import React, {useState} from 'react';
import {SectionList, View} from 'react-native';
import {SOCIAL_MEDIA} from '../../../constants';
import {SectionHeader} from '../../../components/SectionHeader';
import {SectionItem} from '../../../components/SectionItem';
import {Button, CreateProfile, Typography} from '../../../components';
import {translate} from '../../../i18n';

export const OnBoardingScreen = () => {
  const [expandedSections, setExpandedSections] = useState(
    new Set(SOCIAL_MEDIA.map(({title}) => title)),
  );
  const handleToggle = (title: string) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  return <CreateProfile />;
  return (
    <View>
      <Button
        icon="BackArrowIcon"
        variant="rounded_medium"
        buttonColor="DARK_SECONDARY"
        onPress={() => {}}
      />
      <Typography>{translate('welcome_name', {name: 'John Doe'})}</Typography>
      <Typography variant="h5">{translate('welcome_description')}</Typography>
      <SectionList
        showsVerticalScrollIndicator={false}
        bounces={false}
        sections={SOCIAL_MEDIA}
        extraData={expandedSections}
        renderItem={({section: {title}, item}) => {
          const isExpanded = expandedSections.has(title);
          if (!isExpanded) {
            return null;
          }
          return <SectionItem {...item} />;
        }}
        renderSectionHeader={({section: {title}}) => (
          <SectionHeader title={title} handleToggle={handleToggle} />
        )}
      />
    </View>
  );
};
