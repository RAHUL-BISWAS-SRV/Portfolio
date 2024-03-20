import "./MobNav.scss";
import { FiHome } from "react-icons/fi";
import { FaBloggerB } from "react-icons/fa";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";
import { IoIosContact } from "react-icons/io";

function MobNav() {
  return (
    <div className="mobile_navbar_component">
      <div className="mobile_navbar_container">
        <a className="link_item" href="/"><FiHome/></a>
        <a className="link_item" href="/blog"><FaBloggerB/></a>
        <a className="link_item" href="/resume"><HiMiniDocumentDuplicate/></a>
        <a className="link_item" href="/blog"><FaBloggerB/></a>
        <a className="link_item" href="/contact"><IoIosContact/></a>
      </div>
    </div>
  )
}

export default MobNav
