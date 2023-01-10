import Footer from './footer';
import Header from './header';

const Layout = ({ children, className }) => {
  return (
    <>
      <Header className="h-12 bg-blue-400" />
      <main
        className={`${className} flex flex-1 flex-col  min-h-[calc(100vh-48px)] bg-gradient-to-t from-light-primary-start to-light-primary-end`}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
