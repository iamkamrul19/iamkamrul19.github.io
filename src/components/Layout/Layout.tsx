import Footer from "./Footer/Footer";
import LeftRightPart from "./LeftRightPart/LeftRightPart";
import Navbar from "./NavBar/Navbar";
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <main>
        <Navbar />
        <LeftRightPart />
        {props.children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
