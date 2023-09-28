import localFont from "next/font/local";
import Navbar from "./NavBar/Navbar";
interface LayoutProps {
  children: React.ReactNode;
}
const roboto = localFont({
  src: [
    {
      path: "../../../public/font/CalibreRegular.otf",
      weight: "400",
      style: "normal",
    },
  ],
});
const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <main className={roboto.className}>
        <Navbar />
        {props.children}
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default Layout;
