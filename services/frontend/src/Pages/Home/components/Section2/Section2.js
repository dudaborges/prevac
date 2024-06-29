import Worker from "../../../../imagens/men.png";
import "./Section2.css";

// SESSÃO SOBRE

function Section2() {
  return (
    <div className="container-homePage">
      <div className="image-containerHomePage">
        <div className="imagePage">
          <img src={Worker} alt="home image" />
        </div>
        <div className="ellipse-container">
          <div className="ellipse blue"></div>
        </div>
      </div>
      <div className="contentHome">
        <h1 className="titleHomePage2">
          Protegendo o Futuro da Segurança do Trabalho
        </h1>
        <p className="descriptionPageHome2">
          Descubra o PREVAC, o sistema revolucionário de monitoramento de
          segurança para fábricas. Utilizando sensores de última geração e
          câmeras inteligentes, o PREVAC identifica riscos em tempo real, emite
          alertas instantâneos e gera relatórios detalhados. 
          <br> 
          </br>
          <br>
          </br>
          Com ele, você cria um ambiente de trabalho não apenas seguro, mas também altamente
          eficiente, atendendo rigorosamente às normas regulamentadoras. Reduza
          custos operacionais, evite acidentes e aumente a satisfação dos seus
          funcionários. Invista na segurança e veja a produtividade da sua
          equipe crescer exponencialmente.

        </p>
      </div>
    </div>
  );
}
export default Section2;
