import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../..';

export const getProfile = (state: RootState) => state.profile;
export const getProfileSelector = createSelector(
  getProfile,
  profile => profile,
);
export const getSocialMedia = createSelector(
  getProfile,
  profile => profile.socialMedia,
);
