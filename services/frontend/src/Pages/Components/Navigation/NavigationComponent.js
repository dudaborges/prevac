import "./nav.css";
import { FaBars, FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navigationteste() {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirm(false);
    navigate("/");
  };

  const handleCancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <div className="BodyNav">
        <nav className="menu-lateral">
          <div className="btn-expandir">
            <i id="btn-exp">
              <FaBars />
            </i>
          </div>
          <ul className="ulNav">
            <li className="item-menu ativo">
              <Link className="aLinkNav" to="/dashboard">
                <span className="icon">
                  {" "}
                  <FaHome className="home" />
                </span>
                <span className="txt-link">Home</span>
              </Link>
            </li>
            <li className="item-menu">
              <Link className="aLinkNav" to="/usersettings">
                <span className="icon">
                  <IoSettingsSharp />
                </span>
                <span className="txt-link">Configurações</span>
              </Link>
            </li>
            <li className="item-menu">
              <a href="/" className="aLinkNav" onClick={handleLogoutClick}>
                <span className="icon2">
                  <FaSignOutAlt />
                </span>
                <span className="txt-link">Sair</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {showConfirm && (
        <div className="confirm-popup">
          <div className="confirm-popup-content">
            <p>Você tem certeza que deseja sair?</p>
            <button onClick={handleConfirmLogout}>Sim</button>
            <button onClick={handleCancelLogout}>Não</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigationteste;
