import Image, { StaticImageData } from 'next/image';
import staticImageLoader from '../utilities/staticImageLoader';

interface IProps {
  imagePath: StaticImageData;
  alt: string;
}

const HeroImage = ({ alt, imagePath }: IProps) => {
  // const renderChangePhotoBtn = () => {
  //   return <button className="bg">Change photo</button>;
  // };

  return (
    <div className="relative w-full h-full">
      <Image src={imagePath} alt={alt} loader={staticImageLoader} layout="fill" objectFit="cover" />
      {/* {renderChangePhotoBtn()} */}
    </div>
  );
};

export default HeroImage;
