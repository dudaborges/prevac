import Worker2 from "../../../../imagens/men2.png";
import "./Section3.css";

// SESSÃO COMO FUNCIONA
function Section3() {
  return (
    <div className="container-homePage">
      <div className="contentHome">
        <h1 className="titleHomePage3">Como Funciona o PREVAC:</h1>
        <p className="descriptionPageHome3">
          O PREVAC é um sistema de segurança industrial em tempo real, empregando uma
          sofisticada rede de sensores IoT especializados em monitoramento de
          temperatura e pressão.
        </p>
        <p className="descriptionPageHome3">Funcionalidades:</p>
        <ul className="descriptionPageHomeBullet">
          <li>
            Monitoramento contínuo em tempo real de segurança através de um
            dashboard intuitivo.
          </li>
          <li>Alertas instantâneas em caso de anomalias detectadas.</li>
          <li>
            Relatórios de Risco detalhados sobre a presença de pessoas em áreas
            de risco.
          </li>
          <li>Desligamento Automático em situações críticas.</li>
          <li>Conformidade com Normas regulamentadoras.</li>
        </ul>
      </div>
      <div className="image-containerHomePage">
        <div className="imagePage2">
          <img src={Worker2} alt="home image" />
        </div>
        <div className="ellipse-container">
          <div className="ellipse blue"></div>
        </div>
      </div>
    </div>
  );
}
export default Section3;
