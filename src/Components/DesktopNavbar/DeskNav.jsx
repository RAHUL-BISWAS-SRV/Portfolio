import "./DeskNav.scss";
import { FiHome } from "react-icons/fi";
import { FaBloggerB } from "react-icons/fa";
import { HiMiniDocumentDuplicate } from "react-icons/hi2";
import { IoIosContact } from "react-icons/io";


function DeskNav() {
  return (
    <div className="desk_navbar_component desktop-view">
      <div className="desk_navbar_container">
        <a className="link_item" href="/"><FiHome/></a>
        <a className="link_item" href="/blog"><FaBloggerB/></a>
        <a className="link_item" href="/resume"><HiMiniDocumentDuplicate/></a>
        <a className="link_item" href="/blog"><FaBloggerB/></a>
        <a className="link_item" href="/contact"><IoIosContact/></a>
      </div>
    </div>
  );
}

export default DeskNav;
