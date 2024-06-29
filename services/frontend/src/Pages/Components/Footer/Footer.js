import "./footer.css"
import LogoPrevacFooter from "../../../imagens/prevacBlack.png"

const Footer = () => {
    return (
        <>
        <footer className="footer">
        <div className="footer-content">
            <div className="logo-section">
            <img src={LogoPrevacFooter} alt="Prevac"  className="logoPrevacFooter" />
            </div>
            <div className="contact-section">
                <h3 className="title-footer">Fale Conosco</h3>
                <p className="sub-title-footer">Email: atendimento@prevac.com.br</p>
                <p className="sub-title-footer">Atendimento: +55 48 4002 8922</p>
            </div>
            <div className="company-section">
                <h3  className="title-footer">Empresa</h3>
                <p className="sub-title-footer">Email: atendimento@prevac.com.br</p>
                <p className="sub-title-footer">Atendimento: +55 48 4002 8922</p>
            </div>
        </div>
        <div className="footer-bottom">
            <p className="sub-title-footer">© 2024 Prevac</p>
            <p className="sub-title-footer">O conteúdo deste site não pode ser reproduzido sem a prévia autorização do Prevac. PLÁGIO É CRIME.</p>
            <p className="sub-title-footer">ADS Projeto Aplicado - Senai</p>
        </div>
    </footer>
    </>
    )
}

export default Footer;