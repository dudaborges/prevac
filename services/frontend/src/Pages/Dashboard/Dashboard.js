import React from 'react';
import Navigation from '../../Pages/Components/Navigation/menuNav';
import './dashboard.css';
import Alert from '../Components/Alert/Alert';
import { format } from 'date-fns';

function Dashboard({ datas }) {
  return (
    <>
      <Navigation />
      <div className="dashboard-container">
        <main className="main-content">
          <Alert datas={datas} />
          <section className="sensor-status">
            <div className="buttons-dashboard">
              <button className='Button-sensors'>Sensores de Temperatura</button>
              <button className='Button-sensors'>Sensores de Pressão</button>
              <button className='Button-sensors'>Câmeras</button>
            </div>
            <div className="status-header">
              <h2 className="status-title">Status geral dos sensores:</h2>
              <span className="status-ok">OK</span>
            </div>
            <table className="sensor-table">
              <thead>
                <tr>
                  <th className="sensor-table-header">Id</th>
                  <th className="sensor-table-header">Pressure</th>
                  <th className="sensor-table-header">Temperature</th>
                  <th className="sensor-table-header">Status</th>
                  <th className="sensor-table-header">Data</th>
                </tr>
              </thead>
              <tbody>
                {datas.map(item => (
                  <tr className="sensor-table-row" key={item.id}>
                    <td className="sensor-table-cell">{item.id}</td>
                    <td className="sensor-table-cell">{item.pressure}</td>
                    <td className="sensor-table-cell">{item.temperature}</td>
                    <td className="sensor-table-cell">{item.status}</td>
                    <td className="sensor-table-cell">{format(new Date(item.timestamp), 'dd/MM/yyyy HH:mm:ss')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </>
  );
}

Dashboard.defaultProps = {
  datas: []
};

export default Dashboard;
