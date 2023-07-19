import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="logo__container">
        <i class="fa-solid fa-laptop-code"></i>
        <span>PORTFÓLIO</span>
      </div>

      {/* <div className="icons">
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div> */}
      <a href="#" className="link-cv">
        <span>Download CV</span>
      </a>
    </header>
  );
};

export default Header;
