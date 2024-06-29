import Icon1 from "../../../../imagens/icon1.png";
import Icon2 from "../../../../imagens/icon2.png";
import Icon3 from "../../../../imagens/icon3.png";
import Icon4 from "../../../../imagens/icon4.png";

import "../Section1/Section1.css"

function Section1() {
  
  return (
  <>
    <div className="card-wrapper">
      <div className="card-container">
        <div className="card-content-wrapper">
          <div className="card-content">
            <div className="card-image">
              <img src={Icon1} alt="find" width={'100px'} />
            </div>
            <h2 className="card-title">Relatórios Detalhados e Customizáveis</h2>
            <p className="card-description">
            Gera relatórios que ajudam na análise de dados históricos e na tomada de decisões estratégicas</p>
          </div>
          <div className="card-content">
            <div className="card-image">
              <img src={Icon3} alt="choose" width={'100px'} />
            </div>
            <h2 className="card-title">Suporte Técnico Especializado</h2>
            <p className="card-description">
            Disponibilizamos uma equipe de suporte técnico especializada, pronta para auxiliar na implementação, manutenção e atualização do sistema</p>
          </div>
          <div className="card-content">
            <div className="card-image">
              <img src={Icon2} alt="negotiate" width={'100px'} />
            </div>
            <h2 className="card-title">Integrações com Dispositivos IOT</h2>
            <p className="card-description">
            Nosso sistema pode ser facilmente integrado com dispositivos IOT </p>
          </div>
          <div className="card-content">
            <div className="card-image">
              <img src={Icon4} alt="negotiate" width={'100px'} />
            </div>
            <h2 className="card-title">Segurança Avançada</h2>
            <p className="card-description">
            Implementamos medidas de segurança avançadas para proteger seus dados e sistemas contra ameaças.
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  );
}

export default Section1;
