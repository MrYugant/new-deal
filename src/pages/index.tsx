import { useEffect, useState } from 'react';
import Image from 'next/image';
import creators1 from '@/publicImages/creator1.png';
import creators2 from '@/publicImages/creator2.png';
import DropDownImage from '@/publicImages/Dropdown.svg';
import Layout from '@/shared/components/layout';
import PageContainer from '@/shared/components/pageContainer';
import PromotersCard from '@/shared/components/promotersCard/promotersCard';
import { EGender, IPromotersUserDetails } from '@/shared/components/promotersCard/promotersCard.interface';
import Tabs from '@/shared/components/tabs/tabs';

interface IProps {
  heading: string;
  isVisitor?: boolean;
}

const GENDERS_FILTERS_DATA = [
  {
    title: 'All',
  },
  {
    title: 'Male',
  },
  {
    title: 'Female',
  },
];

const data = [
  {
    expertise: ['Gaming', 'Comedy'],
    imageUrl: creators1,
    name: 'Technogamerz',
    socialMedia: {
      instagram: {
        instagramUrl: 'jhvjhgj',
        numberOfFollowers: '18.7 followers',
      },
      youtube: {
        youtubeChannelUrl: 'jggjg ',
        numbersOfSubscribers: '40m subscribers',
      },
    },
    isVerified: true,
    location: 'Mumbai, IN ',
    promotionText: '1,00,000',
    gender: EGender.Male,
  },
  {
    expertise: ['Dance'],
    imageUrl: creators2,
    name: 'Erica',
    socialMedia: {
      instagram: {
        instagramUrl: 'jhvjhgj',
        numberOfFollowers: '18.7 followers',
      },
      youtube: {
        youtubeChannelUrl: 'jggjg ',
        numbersOfSubscribers: '40m subscribers',
      },
    },
    isVerified: true,
    promotionText: '1,00,000',
    gender: EGender.Female,
  },
];

const HomePage = ({ heading = 'Promote with creators', isVisitor = true }: IProps) => {
  const [selectedTab, setSelectedTab] = useState<string>('All');
  const [promotersData, setPromotersData] = useState<IPromotersUserDetails[]>([]);

  useEffect(() => {
    setPromotersData(data);
  }, []);

  const renderHeading = () => {
    return <h1 className="mt-10 text-5xl font-bold text-black">{heading}</h1>;
  };

  const renderSortByFilters = () => {
    return (
      <div className="bg-lightWhite px-4 py-1.5 rounded-10 flex justify-center items-center gap-1.5">
        <span className="font-medium text-1.5sm">Sort by amount</span>
        <Image src={DropDownImage} alt="DropDownImage" unoptimized height={16} width={16} />
      </div>
    );
  };

  const onTabChange = (aSelectedTab: string) => {
    setSelectedTab(aSelectedTab);
  };

  const renderFiltersByGender = () => {
    return <Tabs options={GENDERS_FILTERS_DATA} selectedTab={selectedTab} onChangeTab={onTabChange} />;
  };

  const renderCreatorButton = () => {
    if (!isVisitor) {
      return null;
    }
    return <button className="bg-primary px-4 py-1.5 rounded-10 text-1.5sm text-white">Apply as Creator</button>;
  };

  const renderPromotersCards = () => {
    if (!promotersData) {
      return;
    }
    const filteredData =
      selectedTab === 'All' ? promotersData : promotersData.filter((item) => item.gender === selectedTab);

    return filteredData.map((data, index) => {
      return <PromotersCard key={index} promotersData={data} />;
    });
  };

  return (
    <Layout>
      <PageContainer>
        {renderHeading()}
        <div className="mt-7.5 mb-5 flex justify-between items-center">
          {renderSortByFilters()}
          {renderFiltersByGender()}
          {renderCreatorButton()}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">{renderPromotersCards()}</div>
      </PageContainer>
    </Layout>
  );
};

export default HomePage;
