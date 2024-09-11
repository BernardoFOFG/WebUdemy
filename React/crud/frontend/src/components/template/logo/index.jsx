import "./style.css";
import Logo from "../../../assets/images/logo.png";

export default (props) => (
  <aside className="logo">
    <a href="/" className="logo">
      <img src={Logo} alt="logo" />
    </a>
  </aside>
);
