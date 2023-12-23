import Logo from '../assets/images/logo.svg';
import Search from '../assets/images/search.svg';
import Store from '../assets/images/store.svg'

function Nav() {
  return (
    <nav className="nav-wrapper">
      <div className='nav-content' >
        <ul className="list-styled">
            <li className='link-styled'>
                <img src={Logo} alt=""  />
            </li>
            <li className='link-styled'>
                Store
            </li>
            <li className='link-styled'>Mac</li>
            <li className='link-styled'>Ipad</li>
            <li>Iphone</li>
            <li>Watch</li>
            <li>AirPods</li>
            <li>Tv & Home</li>
            <li>Entertainment</li>
            <li>Accessiors</li>
            <li>Support</li>
            <li><img src={Search} alt="" />Search</li>
            <li><img src={Store} alt="" /> Store</li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
