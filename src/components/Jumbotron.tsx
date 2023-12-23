import Iphone from "../assets/images/iphone-14.jpg";

function Jumbotron() {
  return (
    <div className="jumbotron-section wrapper">
      <h2 className="title">New</h2>
      <img className="logo" src={Iphone} alt="iPhone 14 Pro" />
      <p>Big and Bigger.</p>
      <span>From $41.62/mo. for 24 mo. or $999 before trade-in</span>
      
    </div>
  );
}
export default Jumbotron;
