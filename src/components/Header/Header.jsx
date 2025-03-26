import * as Style from "./Header.styles";
import JoystickLogo from "../../images/logo.png";

const Header = () => {
  return (
    <Style.Container>
      <Style.Navigation>
        <Style.Logo>
          <a href="#">
            <img src={JoystickLogo} />
          </a>
        </Style.Logo>
        <Style.Menu>
          <a href="#">
            <div className="menu-item">História</div>
          </a>
          <a href="#consoles">
            <div className="menu-item">Consoles</div>
          </a>
          <a href="#franchises">
            <div className="menu-item">Franquias</div>
          </a>
          <a href="#online">
            <div className="menu-item">On-line</div>
          </a>
          <a href="#most-played">
            <div className="menu-item">Mais jogados</div>
          </a>
          <a href="#contact">
            <div className="menu-item">Contato</div>
          </a>
        </Style.Menu>
      </Style.Navigation>
    </Style.Container>
  );
};

export default Header;
