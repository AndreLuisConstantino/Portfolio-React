import andre from "../../assets/Content.png";

const HomeContainer = () => {
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
    {
      nome: "Java"
    },
    {
      nome: "Typescript"
    },
    {
      nome: "Kotlin"
    },
    {
      nome: "Mysql"
    },
  ];

  return (
    <section className="home__container">
      <div className="info__container">
        <div className="info-text">
          <div className="text-icons">
            <div className="text-align">
              <span className="hello">Olá meu nome é...</span>
              <p className="name">André.</p>
            </div>
            <div className="icons">
              <a href="https://github.com/AndreLuisConstantino">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://twitter.com/Andreluiskkjk">
                <i class="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/andr%C3%A9-luiz-constantino-4b779124a/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <h2 className="developer">Full-Stack Developer</h2>
          <span className="info-text">
            Sou estudante de programação com formação Full-Stack. <br />
            Sou apaixonado por tecnologia e possuo conhecimento em <br />
            diversas tecnoclogias que são usadas no Desenvolvimento <br />
            Web.
          </span>
        </div>
      </div>
      <div className="linguagens__container">
        {linguagem.map((nomeLing) => (
          <div>
            <span className="nome-linguagem">{nomeLing.nome}</span>
            <span className="separacao">*</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeContainer;
