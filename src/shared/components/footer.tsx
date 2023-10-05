import Image from 'next/image';
import Link from 'next/link';
import InstagramImage from '@/publicImages/Instagram-black.svg';
import WhatsAppImage from '@/publicImages/WhatsApp.svg';
import { IMenu } from '../interfaces/common.interface';

interface IProps {
  FooterBgColor?: string;
}

const OPTIONS: IMenu[] = [
  {
    title: 'Terms',
    url: '/terms',
  },
  {
    title: 'Privacy Policy',
    url: '/privacy-policy',
  },
];

const SOCIAL_OPTIONS: IMenu[] = [
  {
    image: WhatsAppImage,
    title: 'Whatsapp',
    url: '/',
  },
  {
    image: InstagramImage,
    title: 'Instagram',
    url: '/',
  },
];

const Footer = ({ FooterBgColor }: IProps) => {
  const getYear = () => {
    const date = new Date();
    return date.getFullYear();
  };

  const renderFooterOptions = () => {
    return OPTIONS.map((option, index) => {
      return (
        <li key={index} className="text-black text-base">
          <Link href={option.url} aria-label={option.title} passHref>
            {option.title}
          </Link>
        </li>
      );
    });
  };

  const renderSocialIcons = () => {
    return SOCIAL_OPTIONS.map((option, index) => {
      return (
        <li key={index}>
          <Link href={option.url} aria-label={option.title} passHref>
            {option.image && <Image src={option.image} alt={option.title} unoptimized height={24} width={24} />}
          </Link>
        </li>
      );
    });
  };

  return (
    <footer className={`${FooterBgColor || 'bg-white'} w-full z-50 py-10`}>
      <div className="mx-auto max-w-1280 flex justify-between items-center px-4 xl:px-0 container">
        <span className="text-dark-500 text-base">&#169; {getYear()} CREATIVE KINGDOM</span>
        <div className="flex flex-row justify-center items-center gap-10">
          <ul className="flex flex-row justify-center items-center gap-10">{renderFooterOptions()}</ul>
          <ul className="flex flex-row justify-center items-center gap-5">{renderSocialIcons()}</ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
