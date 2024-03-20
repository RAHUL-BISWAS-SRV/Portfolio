import "./Navbar.scss";
import DeskNav from "../../Components/DesktopNavbar/DeskNav";
import MobNav from "../../Components/MobileNavbar/MobNav";
function Navbar() {
  return (
    <div>
      <DeskNav />
      <MobNav/>
    </div>
  );
}

export default Navbar;
