import css from "./aboutpage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Aboutpage = () => {
  return (
    <div className={css.container}>
      <div className={css.topInfo}>
        <div>
          <h1 className={css.title}>Forum App</h1>

          <p>Ante Šimac</p>
        </div>
        <a href="https://github.com/Skjuber?tab=repositories">
          <FontAwesomeIcon icon={faGithub} className={css.github} />
        </a>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sapiente
          nulla tenetur reiciendis ipsum perferendis natus a officia non
          doloremque? Cupiditate optio debitis veritatis sapiente, odio aliquam
          enim adipisci in!
        </p>
        <p>Blablabla</p>
        <p>Blablabla</p>

        <h3>blablabla</h3>
        <p>Blablabla</p>
        <p>Blablabbla</p>

        <h3>/post/:id</h3>
        <p>Blablablbalb</p>
        <p>Blablablabla</p>

        <h3>Blablablabla</h3>
        <p>Blablablablablabalab</p>
      </div>
    </div>
  );
};

export default Aboutpage;
