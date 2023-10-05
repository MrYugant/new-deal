import ContactUsHeroImage from '@/publicImages/contactUs.svg';
import HeroImage from '@/shared/components/heroImage';
import Layout from '@/shared/components/layout';
import PageContainer from '@/shared/components/pageContainer';

// const lists = [{}];

const Page = () => {
  const renderHeroImage = () => {
    return (
      <div className="w-660 h-660">
        <HeroImage imagePath={ContactUsHeroImage} alt="ContactUsHeroImage" />
      </div>
    );
  };

  const renderHeading = () => {
    return <h1 className="font-bold text-black text-6xl mb-10">Get in touch</h1>;
  };

  const renderContactLists = () => {
    return '';
  };

  return (
    <Layout>
      <PageContainer className="flex justify-between items-center">
        {renderHeroImage()}
        <div className="flex">
          {renderHeading()}
          {renderContactLists()}
        </div>
      </PageContainer>
    </Layout>
  );
};

export default Page;
