import { Link } from "react-router-dom";
import "./topbar.css";

export default function TopBar() {
  const user = true;
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <i className="top-bar-icons fab fa-facebook-square"></i>
        <i className="top-bar-icons fab fa-instagram-square"></i>
        <i className="top-bar-icons fab fa-pinterest-square"></i>
        <i className="top-bar-icons fab fa-twitter-square"></i>
      </div>
      <div className="top-bar-center">
        <ul className="top-bar-list">
          <li className="top-bar-listItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="top-bar-listItem">ABOUT</li>
          <li className="top-bar-listItem">CONTACT</li>
          <li className="top-bar-listItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          {user && <li className="top-bar-listItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="top-bar-right">
        {user ? (
          <Link className="link" to="/settings">
            <img
              className="top-bar-img"
              src="https://img.okezone.com/okz/500/library/images/2021/01/11/u8s9jv5k9q0vfkg1yym6_16891.jpeg" alt="ivandjoh"
            />
          </Link>
        ) : (
          <ul className="top-bar-list">
            <li className="top-bar-listItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="top-bar-listItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="top-bar-search-icon fas fa-search"></i>
      </div>
    </div>
  );
}