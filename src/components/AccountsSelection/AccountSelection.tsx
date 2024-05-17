import React, {useState} from 'react';
import {SectionList, View} from 'react-native';
import {Button} from '../Button';
import {Typography} from '../Typography';
import {SOCIAL_MEDIA} from '../../constants';
import {SectionItem} from '../SectionItem';
import {SectionHeader} from '../SectionHeader';
import {translate} from '../../i18n';
import styles from './AccountSelection.styles';
import {useSelector} from 'react-redux';
import {getSocialMedia, onFinishOnboarding} from '../../store';
import {useAppDispatch} from '../../hooks';

interface AccountSelectionProps {
  handleBackStep: () => void;
}

export const AccountSelection = ({handleBackStep}: AccountSelectionProps) => {
  const [expandedSections, setExpandedSections] = useState(
    new Set(SOCIAL_MEDIA.map(({title}) => title)),
  );
  const socialMedia = useSelector(getSocialMedia);
  const dispatch = useAppDispatch();

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
  const handleFinishAddingAccounts = () => {
    dispatch(onFinishOnboarding());
  };

  return (
    <View style={styles.container}>
      <Button
        icon="BackArrowIcon"
        variant="rounded_medium"
        buttonColor="DARK_SECONDARY"
        onPress={handleBackStep}
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
      <View style={styles.containerFinish}>
        <Button
          onPress={handleFinishAddingAccounts}
          isDisabled={socialMedia.length === 0}
          text={translate('next')}
        />
      </View>
    </View>
  );
};
