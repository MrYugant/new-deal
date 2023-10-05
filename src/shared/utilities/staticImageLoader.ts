import { ImageLoaderProps } from 'next/image';

const staticImageLoader = ({ src }: ImageLoaderProps): string => {
  return src;
};

export default staticImageLoader;
