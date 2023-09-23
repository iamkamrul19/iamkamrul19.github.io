const Footer = () => {
  return (
    <footer className="text-center">
      <p className="pb-10 text-theme-text-sub-title">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="text-theme-text-highlight">Kamrul Hasan</span>
      </p>
    </footer>
  );
};

export default Footer;
