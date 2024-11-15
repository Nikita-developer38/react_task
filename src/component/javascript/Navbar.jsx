import "../style/Navbar.css";
import search from "../../images/search-normal.png";
import filter from "../../images/filter.png";
import like from "../../images/Like.png";
import setting from "../../images/Settings.png";
import notification from "../../images/Notification.png";
import profile from "../../images/Profil.png";
function Navbar() {
  return (
    <>
      <div className="nav-div">
        <header className="header">MORENT</header>
        <div className="search-bar">
          <img src={search} alt="search" />

          <input
            type="search"
            className="search"
            placeholder="search something here"
          />
          <div>
            <img src={filter} alt="filter" />
          </div>
        </div>
        <div id="setting">
          <div>
            <img src={like} alt="like" />
          </div>
          <div>
            <img src={notification} alt="notification" />
          </div>
          <div>
            <img src={setting} alt="setting" />
          </div>
          <div>
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
