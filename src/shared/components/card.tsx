import Image from 'next/image';
import { IAboutCardData } from '@/shared/interfaces/about/about.interface';
import staticImageLoader from '@/shared/utilities/staticImageLoader';

interface IProps {
  data: IAboutCardData;
  onClickApplyBtn?: () => void;
}

const Card = ({ onClickApplyBtn, data }: IProps) => {
  const renderTitle = () => {
    return <p className="font-bold text-5.5 mb-5">{data.title}</p>;
  };

  const renderDescription = () => {
    return <div dangerouslySetInnerHTML={{ __html: data.description }} className="mb-12" />;
  };

  const renderApplyButton = () => {
    return (
      <button className="absolute bottom-5 w-136 h-10 bg-primary text-white text-center" onClick={onClickApplyBtn}>
        {data.btnText}
      </button>
    );
  };

  return (
    <>
      <div className="relative w-400 h-238">
        <Image src={data.image} alt={data.title} loader={staticImageLoader} layout="fill" objectFit="cover" />
      </div>
      <div className="p-5 bg-white relative h-286">
        {renderTitle()}
        {renderDescription()}
        {renderApplyButton()}
      </div>
      <style>{`
      p{
        font-size: 18px;
      }
      `}</style>
    </>
  );
};

export default Card;
