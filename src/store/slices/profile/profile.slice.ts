import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ProfilePayload, ProfileState, SocialMedia} from './profile.slice.types';

const initialState: ProfileState = {
  name: '',
  bio: '',
  email: '',
  photo: '',
  username: '',
  isSignUpComplete: false,
  isOnboardingComplete: false,
  socialMedia: [],
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      state.name = action.payload.name || '';
      state.bio = action.payload.bio || '';
      state.email = action.payload.email || '';
      state.photo = action.payload.photo || '';
      state.username = action.payload.username || '';
      state.isSignUpComplete = action.payload.isSignUpComplete || false;
    },
    onUpdateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      state.name = action.payload.name ?? '';
      state.bio = action.payload.bio ?? '';
      state.photo = action.payload.photo ?? '';
    },
    onAddSocialMedia: (state, action: PayloadAction<SocialMedia>) => {
      const socialMediaIndex = state.socialMedia.findIndex(
        socialMedia => socialMedia.name === action.payload.name,
      );
      if (socialMediaIndex !== -1) {
        state.socialMedia[socialMediaIndex] = action.payload;
      } else {
        state.socialMedia.push(action.payload);
      }
    },
    onRemoveSocialMedia: (state, action: PayloadAction<string>) => {
      state.socialMedia = state.socialMedia.filter(
        socialMedia => socialMedia.name !== action.payload,
      );
    },
    onFinishOnboarding: state => {
      state.isOnboardingComplete = true;
    },
    onSetUserInformation: (state, action: PayloadAction<ProfilePayload>) => {
      const {key, value} = action.payload;
      state[key as keyof ProfileState] = value as never;
    },
    resetProfile: () => initialState,
  },
});

export const {
  setProfile,
  onUpdateProfile,
  onAddSocialMedia,
  onRemoveSocialMedia,
  onFinishOnboarding,
  onSetUserInformation,
  resetProfile,
} = profileSlice.actions;
export default profileSlice.reducer;
