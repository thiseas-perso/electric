import Footer from './footer';
import Header from './header';

const Layout = ({ children, className }) => {
  return (
    <div className="grid grid-cols-[1fr_5fr_1fr]">
      <Header className="flex items-center h-14 bg-light-primary-2 col-span-3" />
      <aside className="border-r-2"></aside>
      <main
        className={`${className} flex flex-grow flex-col min-h-full font-poppins`}
      >
        {children}
      </main>
      <aside className="border-l-2"></aside>
      <Footer className="font-lato bg-lime-900 col-span-3" />
    </div>
  );
};

export default Layout;
