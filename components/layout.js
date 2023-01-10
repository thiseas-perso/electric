import Footer from './footer';
import Header from './header';

const Layout = ({ children }) => {
  return (
    <>
      <Header className="h-12 bg-blue-400" />
      <main className="flex flex-1 flex-col  min-h-[calc(100vh-48px)] ">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
