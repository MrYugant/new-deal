import Image from 'next/image';
// import { FaChevronDown } from 'react-icons/fa6';
import Creator1 from '@/publicImages/creator1.png';
import InstagramIcon from '@/publicImages/instagram.svg';
import YouTubeIcon from '@/publicImages/youtube.svg';

interface IProps {
  heading: string;
  btnTitle: string;
}

const HomeLayout = ({ heading, btnTitle }: IProps) => {
  return (
    <section className="max-w-screen-xl border border-red-500">
      {/* Logo */}
      <h1 className="text-4.5xl font-bold">{heading}</h1>

      {/* Filters and Apply Button */}
      <div>
        <button>
          Sort by amount
          {/* Sort by amount <FaChevronDown /> */}
        </button>

        <ul>
          <li>All</li>
          <li>Male</li>
          <li>Female</li>
        </ul>

        <button>{btnTitle}</button>
      </div>

      {/* Cards */}
      <div className="flex">
        <div className="border border-blue-500 p-5 pb-18">
          <Image src={Creator1} alt="creator" />
          <h2>Tech</h2>
          <h3>Gaming</h3>
          <div>
            <div>
              <Image src={InstagramIcon} alt="Instagram Logo" />
              1.2m followers
            </div>
            <div>
              <Image src={YouTubeIcon} alt="YouTube Logo" />
              1.2m followers
            </div>
            ₹ 1,00,000 per promotion
          </div>
        </div>
        <div className="border border-blue-500">
          <Image src={Creator1} alt="creator" />
          <h2>Tech</h2>
          <h3>Gaming</h3>
          <div>
            <div>
              <Image src={InstagramIcon} alt="Instagram Logo" />
              1.2m followers
            </div>
            <div>
              <Image src={YouTubeIcon} alt="YouTube Logo" />
              1.2m followers
            </div>
            ₹ 1,00,000 per promotion
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeLayout;
