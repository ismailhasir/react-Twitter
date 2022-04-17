import "./SideBar.css";
import {
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  MessagesIcon,
  BookmarksIcon,
  ListsIcon,
  ProfileIcon,
  MoreIcon,
} from "../../icons/icons";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-top">
        <Link to="/" className="sidebar-item">
          <HomeIcon style={{ color: "white" }} /> Anasayfa
        </Link>
        <Link to="" className="sidebar-item">
          <ExploreIcon />
          Kesfet
        </Link>
        <Link to="" className="sidebar-item">
          <ProfileIcon />
          Topluluklar
        </Link>
        <Link to="" className="sidebar-item">
          <NotificationsIcon />
          Bildirimler
        </Link>
        <Link to="" className="sidebar-item">
          <MessagesIcon />
          Mesajlar
        </Link>
        <Link to="" className="sidebar-item">
          <BookmarksIcon />
          Yer Imleri
        </Link>
        <Link to="" className="sidebar-item">
          <ListsIcon />
          Listeler
        </Link>
        <Link to="" className="sidebar-item">
          <ProfileIcon />
          Profil
        </Link>
        <Link to="" className="sidebar-item">
          <MoreIcon />
          Daha Fazla
        </Link>
      </div>
      <div className="sidebar-bottom">Profile Section</div>
    </div>
  );
}
