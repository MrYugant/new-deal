import React from 'react';
import Image from 'next/image';
import PenImage from '@/publicImages/Pen.svg';
import staticImageLoader from '../utilities/staticImageLoader';

interface IProps {
  children: React.ReactNode;
  onClickEditButton?: () => void;
  isAdmin?: boolean;
  className?: string;
}

const Edit = ({ children, isAdmin, className /* onClickEditButton */ }: IProps) => {
  const renderPenButton = () => {
    return (
      isAdmin && (
        <div
          className="absolute right-1 bottom-1 cursor-pointer" /* onClick={() => onClickEditButton && onClickEditButton()} */
        >
          <Image src={PenImage} alt="PenImage" loader={staticImageLoader} height={26} width={26} unoptimized />
        </div>
      )
    );
  };

  return (
    <div className={`relative h-full w-full ${isAdmin ? 'border border-black' : ''} ${className}`}>
      {children}
      {renderPenButton()}
    </div>
  );
};

export default Edit;
