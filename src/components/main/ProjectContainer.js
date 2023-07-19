import randomDogs from "../../assets/random-dogs.png";
import lionSchool from "../../assets/lion-school.png";
import lionSchoolMobile from "../../assets/lion-school-mobile.png";
import empresarialChat from "../../assets/empresarial-chat.png";

const ProjectContainer = () => {
  return (
    <section className="projects__container">
      <h1>PROJETOS</h1>
      <div className="projects__images">
        <div className="top">
          <div>
            <img src={randomDogs} alt="Random dogs" />
            <span>
              Random dogs <br />
              consumo de api com web components e routes
            </span>
          </div>
          <div>
            <img src={lionSchool} alt="Lion School" />
            <span>
              lION SCHOOL <br />
              Projeto com consumo de api rest feita em nodejs
            </span>
          </div>
        </div>
        <div className="bottom">
          <div>
            <img
              src={lionSchoolMobile}
              alt="Lion School Mobile"
              className="lion-school-mobile"
            />
            <span>
              lION SCHOOL <br />
              CONSUMO DE API EM KOTLIN COM JETPACK COMPOSE
            </span>
          </div>
          <div>
            <img src={empresarialChat} alt="Lion School Mobile" />
            <span>
              empresarial chat <br /> Projeto com consumo de api rest feita em nodejs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
