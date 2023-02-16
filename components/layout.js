import Footer from './footer';
import Header from './header';

const Layout = ({ children, className }) => {
  return (
    <>
      <script
        data-name="BMC-Widget"
        data-cfasync="false"
        src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
        data-id="eleco"
        data-description="Support me on Buy me a coffee!"
        data-message="En tant que projet personnel votre don est essentiel pour maintenir ce site en vie. Chaque petit geste est vraiment apprécié!"
        data-color="#5F7FFF"
        data-position="Right"
        data-x_margin="18"
        data-y_margin="18"
        defer
      />
      <main
        className={`${className} flex flex-grow flex-col min-h-full font-poppins`}
      >
        {children}
      </main>
      <Footer className="font-lato bg-lime-900" />
    </>
  );
};

export default Layout;
