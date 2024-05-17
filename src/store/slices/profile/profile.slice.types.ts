export interface SocialMedia {
  name: string;
  username: string;
  icon: string;
}

export interface ProfileState {
  name: string;
  bio: string;
  email: string;
  photo: string;
  username: string;
  isSignUpComplete: boolean;
  isOnboardingComplete: boolean;
  socialMedia: SocialMedia[];
}
