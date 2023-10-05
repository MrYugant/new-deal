import { StaticImageData } from 'next/image';

export interface IMenu {
  image?: StaticImageData;
  title: string;
  url: string;
}
