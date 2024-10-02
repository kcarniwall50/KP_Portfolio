import React from "react";
import CTA from "./CTA";
import "./header.css";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="header">
      <div className="header_container">
        <div className="text-content">
          <h5>Hello, I'm </h5>
          <h1>Kamlesh Patel</h1>
        </div>

        <CTA />
        <a href="#contact" className="scroll_down">
          Scroll Down
        </a>
      </div>
      <HeaderSocials />
    </header>
  );
};

export default Header;
