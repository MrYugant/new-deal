interface IProps {
  children: React.ReactNode;
  className?: string;
  overWritePadding?: string;
}

const PageContainer = ({ children, className, overWritePadding }: IProps): JSX.Element => {
  return (
    <section
      // className={` ${overWritePadding || 'p-4 xl:p-0 xl:py-8'} mx-auto ${container ? 'container' : ' max-w-1280'} ${
      //   className || ''
      // }`}
      className={`max-w-xl ${overWritePadding || 'p-4 xl:p-0 xl:py-8'}  ${className || ''}`}
    >
      {children}
    </section>
  );
};

export default PageContainer;
