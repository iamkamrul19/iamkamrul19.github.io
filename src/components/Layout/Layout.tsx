import Navbar from "./NavBar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <main>
        <Navbar />
        {props.children}
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Layout;
