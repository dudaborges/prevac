import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import LogoPrevac from "../../../../imagens/logoPrevac.png";
import img2 from "../../../../imagens/2.png";
import img3 from "../../../../imagens/3.png";
import img4 from "../../../../imagens/4.png";
import "../../components/Header/Header.css"


function Header() {
    const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  // Array com os slides da página inicial
  const slides = [
      {
          src: img3,
          alt: 'Imagem 1',
          text: 'Monitoramento inteligente, prevenção eficiente!'
      },
      {
          src: img4,
          alt: 'Imagem 2',
          text: 'Tranquilidade para você, segurança para seus colaboradores'
      },
      {
          src: img2,
          alt: 'Imagem 3',
          text: 'Junte-se às empresas que já confiam no Prevac'
      }
  ];

  // Efeito para trocar os slides automaticamente a cada 4 segundos
  useEffect(() => {
      const interval = setInterval(() => {
          setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
  }, [slides.length]);

  // Efeito para alterar o cabeçalho ao rolar a página
  useEffect(() => {
      const handleScroll = () => {
          setScrolled(window.scrollY > 50);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para mostrar o slide específico
  const showSlide = (index) => {
      setCurrentSlide((index + slides.length) % slides.length);
  };
    return (
        <div className="image-slider-container">
        <nav className={`header ${scrolled ? 'scrolled' : ''}`}>
          <div className="divlogo">
            <img src={LogoPrevac} alt="People" className="logoPrevac" />
          </div>
          <div className="optionsHeader">
            <a href="#recursos" className="optionSelect">Serviços</a>
            <a href="#sobre" className="optionSelect">Sobre</a>
            <a href="#como-funciona" className="optionSelect">Como Funciona</a>
            <a href="#footer" className="optionSelect">Contato</a>
            <Link to="/login" className="optionSelect2">Login</Link>
          </div>
        </nav>
        <div className="image-slider">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img className="image" src={slide.src} alt={slide.alt} />
              <div className="text-overlay" dangerouslySetInnerHTML={{ __html: slide.text }} />
            </div>
          ))}
          <div className="navigation">
            <button className="prev" onClick={() => showSlide(currentSlide - 1)}>&#10094;</button>
            <button className="next" onClick={() => showSlide(currentSlide + 1)}>&#10095;</button>
          </div>
        </div>
      </div>
    )
}
export default Header;