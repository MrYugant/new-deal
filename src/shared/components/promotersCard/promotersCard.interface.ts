import { StaticImageData } from 'next/image';

export interface IPromotersUserDetails {
  imageUrl: string | StaticImageData;
  name: string;
  expertise: string[];
  location?: string;
  isVerified?: boolean;
  promotionText?: string;
  shootText?: string;
  socialMedia: ISocialMedia;

  gender: EGender;
}
export interface ISocialMedia {
  instagram?: {
    numberOfFollowers: string;
    instagramUrl: string;
  };
  youtube?: {
    numbersOfSubscribers: string;
    youtubeChannelUrl: string;
  };
}

export enum EGender {
  Male = 'Male',
  Female = 'Female',
  Other = 'other',
}
