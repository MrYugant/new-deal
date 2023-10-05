import Link from 'next/link';
import { HEADER_MENU_LIST } from '@/shared/constants/common.constant';

interface IProps {
  isOpen: boolean;
}

const HeaderDropDown = ({ isOpen }: IProps) => {
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

  return (
    <div
      className={`block md:hidden w-full bg-white h-full fixed z-40 left-0 pt-12 top-0 transform transition duration-200 ease-in-out ${
        isOpen ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <ul className="h-full w-full">{renderHeaderOptionsList()}</ul>
    </div>
  );
};

export default HeaderDropDown;
