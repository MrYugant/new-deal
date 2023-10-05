import { useState } from 'react';
import Footer from './footer';
import Header from './header';
import HeaderDropDown from './headerDropDown';

interface IProps {
  children: React.ReactNode;
  FooterBgColor?: string;
}

const Layout = ({ children, FooterBgColor }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <Header isOpen={isOpen} onClickMenu={() => setIsOpen(!isOpen)} />
      <main>
        <HeaderDropDown isOpen={isOpen} />
        {children}
      </main>
      <Footer FooterBgColor={FooterBgColor} />
    </>
  );
};

export default Layout;
