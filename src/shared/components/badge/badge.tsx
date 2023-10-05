import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface IProps {
  image: StaticImageData;
  text: string;
  url?: string;
  textClassName?: string;
}

const Badge = ({ image, text, url, textClassName }: IProps) => {
  const renderText = () => {
    const badgeText = <span className={`text-14 font-medium text-center ${textClassName}`}>{text}</span>;

    return url ? <a href={url}>{badgeText}</a> : badgeText;
  };

  return (
    <div className="rounded-50 bg-lightWhite flex items-center px-2.5 py-1.5 gap-1.5 w-fit">
              <Image src={image} alt={text} unoptimized height={16} width={16} />
      {renderText()}
    </div>
  );
};

export default Badge;
