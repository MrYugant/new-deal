// import Hamburger from 'hamburger-react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import userImage from '@/publicImages/user.svg';
import { HEADER_MENU_LIST } from '@/shared/constants/common.constant';

interface IProps {
  onClickMenu: () => void;
  isOpen: boolean;
}

const Header = ({ onClickMenu }: IProps) => {
  const renderHeaderOptionsList = () => {
    return HEADER_MENU_LIST.map((menu, index) => {
      return (
        <li key={index} className="hidden md:flex text-base font-medium text-black justify-center items-center">
          <Link href={menu.url} aria-label={menu.title} passHref>
            {menu.title}
          </Link>
        </li>
      );
    });
  };

  const renderDesktopMenu = () => {
    return (
      <ul className="hidden md:flex justify-center items-center gap-8">
        {renderHeaderOptionsList()}
        <li className="text-base font-medium px-8 bg-primary text-white py-2.5 rounded-50">
          <Link href="/account" aria-label="Account" passHref>
            Account
          </Link>
        </li>
      </ul>
    );
  };

  const renderHamburgerMenu = () => {
    return (
      <button type="button" className="flex-none md:hidden  noHoverEffect" onClick={onClickMenu}>
        {/* <Hamburger label="Sidebar Menu" toggled={isOpen} direction="right" size={24} distance="lg" color="#333333" /> */}
      </button>
    );
  };

  const renderMobileMenu = () => {
    return (
      <ul className="flex justify-between items-center md:hidden">
        <li className="text-base font-medium px-2 py-2 bg-primary text-white rounded-50">
          <Link href="/account" aria-label="Account" passHref>
            <Image src={userImage} alt="user" height={20} width={20} unoptimized />
          </Link>
        </li>
        {renderHamburgerMenu()}
      </ul>
    );
  };

  return (
    <header
      className="bg-white text-white flex justify-center items-center sticky top-0 z-50 h-88 border-b border-lightWhite"
      role="banner"
    >
      <Head>
        <title>Your SEO-Friendly Title</title>
        <meta name="description" content="Your SEO-Friendly Description" />
        <meta name="robots" content="index, follow" />
        {/* Add other SEO meta tags as needed */}
      </Head>
      <nav className="container mx-auto flex justify-between items-center max-w-1280 px-4 xl:px-0">
        <Link href="/" className="text-2xl font-bold text-black uppercase logoColor" aria-label="Home" passHref>
          Creative Kingdom
        </Link>
        {renderDesktopMenu()}
        {renderMobileMenu()}
      </nav>
    </header>
  );
};

export default Header;
/*
<div className="container mx-auto flex justify-between items-center">
        // Logo with Link
        <div>
          <Link href="/" className="text-2xl font-bold" aria-label="Home" passHref>
            Creative Kingdom
          </Link>
        </div>

        // Page links
        <nav role="navigation">
          <ul className="flex space-x-4">
            <li>
              <Link href="/creators" className="hover:text-gray-300" aria-label="Creators" passHref>
                Creators
              </Link>
            </li>
            <li>
              <Link href="/models" className="hover:text-gray-300" aria-label="Models" passHref>
                Models
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300" aria-label="About" passHref>
                About
              </Link>
            </li>
            <li>
              <Link href="/account" className="hover:text-gray-300" aria-label="Account" passHref>
                Account
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
*/
