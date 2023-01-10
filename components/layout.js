import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col flex-grow">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
