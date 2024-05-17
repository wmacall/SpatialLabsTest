import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {ProfileState} from './profile.slice.types';

const initialState: ProfileState = {
  name: '',
  bio: '',
  email: '',
  photo: '',
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action: PayloadAction<ProfileState>) => {
      state.name = action.payload.name;
      state.bio = action.payload.bio;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    onUpdateProfile: (state, action: PayloadAction<Partial<ProfileState>>) => {
      state.name = action.payload.name ?? '';
      state.bio = action.payload.bio ?? '';
      state.photo = action.payload.photo ?? '';
    },
    resetProfile: () => initialState,
  },
});

export const {setProfile, onUpdateProfile, resetProfile} = profileSlice.actions;
export default profileSlice.reducer;
