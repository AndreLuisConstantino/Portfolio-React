import "./Main.css";
import andre from "../assets/Content.png";

const Main = () => {
  const linguagem = [
    {
      nome: "Node.Js",
    },
    {
      nome: "Javascript",
    },
    {
      nome: "figma",
    },
    {
      nome: "github/git",
    },
    {
      nome: "react",
    },
    {
      nome: "bootstrap",
    },
  ];

  return (
    <main>
      <div className="info__container">
        <div className="info-text">
          <span className="hello">Olá meu nome é...</span>
          <p className="name">André.</p>
          <h2 className="developer">
            Full-Stack <br></br>Developer
          </h2>
          <span className="info-text">
            Sou estudante na área de criação e manutenção de <br />
            sites e desenvolvimento web, tenho conhecimento <br />
            de prototipação em designer sempre pensando na <br />
            experiência do úsuario.{" "}
          </span>
          <a href="#" className="button-contact">
            <span>Entre em contato</span>
          </a>
        </div>
        <img src={andre} alt="André" />
      </div>
      <div className="linguagens__container">
        {linguagem.map((nomeLing) => (
            <div>
                <span className="nome-linguagem">{nomeLing.nome}</span>
                {}
                    <span className="separacao">*</span>
            </div>
          
        ))}
      </div>
    </main>
  );
};

export default Main;
