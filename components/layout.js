import Footer from './footer';
import Header from './header';

const Layout = ({ children, className }) => {
  return (
    <>
      <Header className="h-12 font-lato" />
      <main
        className={`${className} flex flex-1 flex-col  min-h-[calc(100vh-48px)] font-poppins`}
      >
        {children}
      </main>
      <Footer className="font-lato" />
    </>
  );
};

export default Layout;
