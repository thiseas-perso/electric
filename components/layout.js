import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main /* className="container mx-auto px-4" */>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
