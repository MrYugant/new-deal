import { StaticImageData } from 'next/image';

export interface IAboutCardData {
  image: StaticImageData;
  title: string;
  description: string;
  btnText: string;
}
