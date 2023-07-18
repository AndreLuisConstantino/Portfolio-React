import randomDogs from "../../assets/random-dogs.png";
import lionSchool from "../../assets/lion-school.png";

const ProjectContainer = () => {
  return (
    <section className="projects__container">
      <h1>PROJETOS</h1>
      <div className="projects__images">
        <div>
          <img src={randomDogs} alt="Random dogs" />
          <span>Random Dogs</span>
        </div>
        <div>
          <img src={lionSchool} alt="Lion School" />
          <span>Lion School</span>
        </div>
      </div>
    </section>
  );
};

export default ProjectContainer;
