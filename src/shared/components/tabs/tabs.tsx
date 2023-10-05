import React from 'react';

interface IProps {
  options: {
    title: string;
    url?: string;
  }[];

  selectedTab: string;
  onChangeTab?: (title: string) => void;
}

const Tabs = ({ options, onChangeTab, selectedTab }: IProps) => {
  const renderList = () => {
    return options.map((option, index) => {
      return (
        <li
          key={index}
          className="cursor-pointer pb-1 relative"
          onClick={() => onChangeTab && onChangeTab(option.title)}
        >
          {option.title === selectedTab && <span className="border-b bg-black h-0.5 w-full absolute bottom-0" />}
          {option.title}
        </li>
      );
    });
  };

  return <ul className="flex items-center justify-center gap-7">{renderList()}</ul>;
};

export default Tabs;
