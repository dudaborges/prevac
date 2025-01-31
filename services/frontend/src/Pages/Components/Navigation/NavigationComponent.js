import "./nav.css";
import { FaBars, FaHome, FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Navigationteste() {
  const location = useLocation();
  const [showConfirm, setShowConfirm] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    // Atualiza o estado activeItem com base na localização atual
    switch (location.pathname) {
      case "/dashboard":
        setActiveItem("home");
        break;
      case "/usersettings":
        setActiveItem("settings");
        break;
      default:
        setActiveItem("");
        break;
    }
  }, [location]);

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setShowConfirm(true);
  };

  const handleConfirmLogout = () => {
    setShowConfirm(false);
    // Redireciona para a página inicial após logout
    window.location.href = "/";
  };

  const handleCancelLogout = () => {
    setShowConfirm(false);
  };

  return (
    <div>
      <div className="BodyNav">
        <nav className="menu-lateral">
        <div className="ContainerNav00">
          <div className="containernav01">
          <div className="btn-expandir">
            <i id="btn-exp">
              <FaBars />
            </i>
          </div>
          <ul className="ulNav">
            <li className="">
              <Link className="aLinkNav" to="/dashboard">
                <span className="icon">
                  {" "}
                  <FaHome className="home" />
                </span>
                <span className="txt-link">Home</span>
              </Link>
            </li>

            <li className="">
              <Link className="aLinkNav" to="/usersettings">
                <span className="icon">
                  {" "}
                  <IoSettingsSharp />
                </span>
                <span className="txt-link">Configurações</span>
              </Link>
            </li>
            </ul>
            </div>
        <div className="containernav01">
         <ul className="ulNav">
            <li className="item-menu">
              <a href="/" className="aLinkNav" onClick={handleLogoutClick}>
                <span className="icon2">
                  <FaSignOutAlt />
                </span>
                <span className="txt-link">Sair</span>
              </a>
            </li>
          </ul>
        </div>
        </div>
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
