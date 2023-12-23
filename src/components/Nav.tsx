import Logo from "../assets/images/logo.svg";
import Search from "../assets/images/search.svg";
import Store from "../assets/images/store.svg";

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li className="link-styled">
            <img src={Logo} alt="" />
          </li>
          <li className="link-styled">
            <a className="link-styled">Store</a>
          </li>
          <li className="link-styled">
            <a className="link-styled">Mac</a>
          </li>
          <li>
            <a className="link-styled">Ipad</a>
          </li>
          <li>
            <a className="link-styled">Iphone</a>
          </li>
          <li>
            <a className="link-styled">Watch</a>
          </li>
          <li>
            <a className="link-styled">AirPods</a>
          </li>
          <li>
            <a className="link-styled">Tv & Home</a>
          </li>
          <li>
            <a className="link-styled">Entertainment</a>
          </li>
          <li>
            <a className="link-styled">Accessiors</a>
          </li>
          <li>
            <a className="link-styled">Support</a>
          </li>
          <li>
            <img src={Search} alt="Search" />
            Search
          </li>
          <li>
            <img src={Store} alt="" /> Store
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
