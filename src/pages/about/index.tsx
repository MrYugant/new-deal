import { useState } from 'react';
import Image from 'next/image';
import AboutUsHeroImage from '@/publicImages/aboutUsHeroImage.svg';
import Card1 from '@/publicImages/card1.svg';
import Card2 from '@/publicImages/card2.svg';
import Card3 from '@/publicImages/card3.svg';
import Icon1 from '@/publicImages/icon1.svg';
import Card from '@/shared/components/card';
import Edit from '@/shared/components/edit';
import HeroImage from '@/shared/components/heroImage';
import Layout from '@/shared/components/layout';
import PageContainer from '@/shared/components/pageContainer';
import { IAboutCardData } from '@/shared/interfaces/about/about.interface';

interface IProps {
  isAdmin?: boolean;
}

const ABOUT_US_CARD_DATA: IAboutCardData[] = [
  {
    btnText: 'Apply',
    description:
      '<p>We bring you promotion offers and manage the entire deal for free.</p></br><p>We take a 10% commission on the successful deal.</p>',
    image: Card1,
    title: 'For creators',
  },
  {
    btnText: 'Apply',
    description:
      '<p>We bring you promotion offers and manage the entire deal for free.</p></br><p>We take a 10% commission on the successful deal.</p>',
    image: Card2,
    title: 'For Models',
  },
  {
    btnText: 'Sign Up',
    description:
      '<p>Making deals with creators and models is hassle free. Whether you want to promote your product or shoot with models.</p>',
    image: Card3,
    title: 'For Businesses',
  },
];

const AboutPage = ({ isAdmin = false }: IProps) => {
  const [showLabel, setToShowLabel] = useState<boolean>(true);
  const [heading, setHeading] = useState<string>('We find deals for creators, models, and brands.'); //TODO change heading here

  const renderServingIndiaLabel = () => {
    return (
      showLabel && (
        <div className="flex flex-col pt-5 ml-auto items-end mb-6">
          <span className="text-dark-500 mb-1.5">Serving in India</span>
          <span
            className="text-primary cursor-pointer"
            onClick={() => {
              setToShowLabel(false);
            }}
          >
            Hide label
          </span>
        </div>
      )
    );
  };

  const renderHeading = () => {
    return (
      <div className="w-540 h-260">
        <Edit isAdmin={isAdmin}>
          {isAdmin ? (
            <input
              type="text"
              value={heading}
              className="font-bold text-5xl leading-73 focus:outline-none"
              onChange={(e) => setHeading(e.target.value)}
            />
          ) : (
            <h1 className="font-bold text-5xl leading-73">{heading}</h1>
          )}
        </Edit>
      </div>
    );
  };

  const renderSubHeading = () => {
    return (
      <div className="w-395 h-66">
        <Edit isAdmin={isAdmin}>
          {isAdmin ? (
            <input
              type="text"
              value={heading}
              className="text-black text-lg font-medium"
              onChange={(e) => setHeading(e.target.value)}
            />
          ) : (
            <h2 className="text-black text-lg font-medium">
              We bring you deals and manage it for free and take a 10% commission on a successful deal. Otherwise, we
              charge nothing.
            </h2>
          )}
        </Edit>
      </div>
    );
  };

  const renderCards = () => {
    return ABOUT_US_CARD_DATA.map((data, index) => {
      return (
        <div key={index} className="w-400 h-524">
          <Card data={data} onClickApplyBtn={() => console.log('object')} />
        </div>
      );
    });
  };

  const renderCardSection = () => {
    return (
      <div className="bg-gradient-to-b from-violet-200 to-indigo-50">
        <PageContainer overWritePadding="p-4 xl:p-0 xl:pt-50">
          <div className="text-black text-6xl font-bold mb-15.2 text-center">We Make Deals</div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">{renderCards()}</div>
        </PageContainer>
      </div>
    );
  };

  const renderFirstCard = () => {
    return (
      <div className="h-full w-full mb-40">
        <div className="w-full h-400 relative overflow-hidden">
          <div className="w-full h-full left-0 top-0 absolute bg-indigo-400" />
          <div className="w-[800px] h-[800px] left-[-404px] top-[-400px] absolute bg-blue-600 rounded-full" />
          <div className="EarnDealAndValue left-[116px] top-[60px] absolute text-white text-base font-medium">
            EARN, DEAL, AND VALUE
          </div>
          <div className="ASpaceToMakeDealsWithCreatorsModelsAndBrands w-[877px] left-[396px] top-[91px] absolute text-white text-6xl font-bold">
            A space to make deals with creators, models, and brands.
          </div>
        </div>
      </div>
    );
  };

  const renderFirstCardContent = () => {
    return (
      <PageContainer>
        <Image src={Icon1} alt="icon1" unoptimized height={70} width={70} />
        <p className="mt-7.5 text-3.5xl">
          Business can make entire deal with creators and models via our portal, and payment is safe for everyone during
          the deals.
        </p>
      </PageContainer>
    );
  };

  return (
    <Layout>
      <PageContainer>
        {renderServingIndiaLabel()}
        <div className="flex justify-between mb-20">
          {renderHeading()}
          {renderSubHeading()}
        </div>
      </PageContainer>
      <div className="h-535 w-full">
        <HeroImage imagePath={AboutUsHeroImage} alt="aboutUS hero image" />
      </div>
      {renderCardSection()}
      <section className="bg-shadowLightPrimary py-50">
        {renderFirstCard()}
        {renderFirstCardContent()}
      </section>
    </Layout>
  );
};

export default AboutPage;
