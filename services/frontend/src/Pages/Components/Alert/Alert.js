import { FaBell } from "react-icons/fa";
import React, { useEffect, useState } from 'react';
import "./Alert.css"
function Alert({ datas }) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const [alertCount, setAlertCount] = useState(0)

  const toggleNotificationMenu = () => {
    setIsNotificationOpen(!isNotificationOpen)
  };

  const alertMessages = datas.filter(data => data.status.includes("[ALERTA]"))
 
  useEffect(() => {
    setAlertCount(alertMessages.length)
  })
      
    return (
        <>
        <header className="headerDashboard">
            <h1 className="header-title">Relatório Geral</h1>
            <div className="notification-wrapper">
              <div className="notification">
                <span className="notification-badge">{alertCount}</span>
                <button className="notification-button" onClick={toggleNotificationMenu}>
                 <FaBell className='iconNotification'/>
                </button>
              </div>
              {isNotificationOpen && (
                <div className="notification-menu">
                  <div className="notification-header">
                    <h3>Notificações</h3>
                    <span className="notification-count">{alertCount}</span>
                  </div>
                  <ul className="notification-list">
                    {
                      datas &&
                      datas.map((data) => (
                        <li className="notification-item" key={data.id}>{data.status}</li>
                      ))
                    }
                  </ul>
                </div>
              )}
            </div>
          </header>
        </>
    )
}

export default Alert;