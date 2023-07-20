import andre from "../../assets/my-image.png";
import languages from "../../assets/languages.png";

const AboutContainer = () => {
  return (
    <section className="about__container">
      <h1 className="about__title">SOBRE MIM</h1>
      <div className="about__me">
        <img src={andre} alt="Imagem do André" />
        <div className="text-languages">
          <span>
            Eu sou o André, estudante de programação a mais <br />
            de um ano. Possuo habilidades de trabalho em <br /> equipe e sempre
            procuro ter a melhor experiência <br />
            com meus colegas de trabalho. <br />
            Procuro vagas na área de desenvolvimento web e <br />
            possuo habilidades Full-Stack. Amo tecnologia e informação e estou
            me <br /> esforçando muito para ser o melhor todo dia! 😁
          </span>
          <img src={languages} alt="Linguagens do André" />
        </div>
      </div>
    </section>
  );
};

export default AboutContainer;
