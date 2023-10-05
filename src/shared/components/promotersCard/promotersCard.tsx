import React from 'react';
import Image from 'next/image';
import InstagramImage from '@/publicImages/instagram.svg';
import VerifiedImage from '@/publicImages/verified.svg';
import YoutubeImage from '@/publicImages/youtube.svg';
import Badge from '../badge/badge';
import { IPromotersUserDetails, ISocialMedia } from './promotersCard.interface';

interface IProps {
  promotersData: IPromotersUserDetails;
}

const PromotersCard = ({ promotersData }: IProps) => {
  const renderName = () => {
    return (
      <div className="flex items-center gap-1.5">
        <span className="font-semibold text-1.5xl">{promotersData.name}</span>
        {promotersData.isVerified && (
          <Image src={VerifiedImage} alt="VerifiedImage" unoptimized height={24} width={24} />
        )}
      </div>
    );
  };

  const renderExpertise = () => {
    const exercises = promotersData.expertise.join(',');
    return <p className="text-base font-medium mb-2.5">{exercises}</p>;
  };

  const renderLocationOnImage = () => {
    if (!promotersData.socialMedia && !promotersData.location) {
      return;
    }
    return (
      promotersData.location && (
        <div className="absolute bottom-2 left-2">
          <Badge image={YoutubeImage} text={promotersData.location} />
        </div>
      )
    );
  };

  const renderSocialMedia = (socialMediaHandlers: ISocialMedia) => {
    return (
      <div className="flex flex-col md:flex-row items-start md:items-center gap-2.5">
        {socialMediaHandlers.instagram && (
          <Badge
            image={InstagramImage}
            text={socialMediaHandlers.instagram.numberOfFollowers}
            textClassName="text-primary"
            url={socialMediaHandlers.instagram.instagramUrl}
          />
        )}
        {socialMediaHandlers.youtube && (
          <Badge
            image={YoutubeImage}
            text={socialMediaHandlers.youtube.numbersOfSubscribers}
            textClassName="text-primary"
            url={socialMediaHandlers.youtube.youtubeChannelUrl}
          />
        )}
      </div>
    );
  };

  const renderLocationOrSocialMedia = () => {
    if (promotersData.socialMedia) {
      return renderSocialMedia(promotersData.socialMedia);
    }
    if (promotersData.location) {
      return <Badge image={YoutubeImage} text={promotersData.location} />;
    }
    return;
  };

  const renderPromotersText = () => {
    if (promotersData.promotionText) {
      return (
        <>
          <span className="text-20 font-medium mr-1">{promotersData.promotionText}</span>
          <span className="text-12">per promotion</span>
        </>
      );
    }
    if (promotersData.shootText) {
      return (
        <>
          <span className="text-20 font-medium mr-1">{promotersData.shootText}</span>
          <span className="text-12">per shoot</span>
        </>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full p-5 rounded-20 border border-lightWhite bg-white shadow-2">
      <div className="relative w-full h-360 mb-5">
        <Image src={promotersData.imageUrl} alt={promotersData.name} layout="fill" objectFit="cover" />
        {renderLocationOnImage()}
      </div>
      {renderName()}
      {renderExpertise()}
      <div className="mb-18">{renderLocationOrSocialMedia()}</div>
      {renderPromotersText()}
    </div>
  );
};

export default PromotersCard;
