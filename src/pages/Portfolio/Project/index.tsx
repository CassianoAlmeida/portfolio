import styles from './Project.module.scss';
import toGoIcon from 'assets/logos/to-go-icon.jpeg';
import githubLogo from 'assets/logos/github-logo.png';


interface ProjectProps {
    project: {
      id: number;
      name: string;
      link: string;
      image: string;
      github: string;
      details: {
        description: string;
        techStack: string[];
        status: string[];
      };
    };
  }
  
export default function Project({ project }: ProjectProps) {
  const { id, name, link, image, details, github } = project;
  const styleImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projects__project} key={id} id="project-item">
        <div className={styles.projects__project__figure}>
          <span className={styles.projects__project__img} style={styleImage} key={id}/>
        </div>
        <div className={styles.projects__project__body}>
          <h3 className={styles.projects__project__body__title}>{name}</h3>
          <p className={styles.projects__project__body__description}>{`Description: ${details.description}`}</p>
          <h4 className={styles.projects__project__body__stackTitle}>Tech Stack in This Project</h4>
          <span className={styles.projects__project__body__stackList}>{details.techStack.join(' | ')}</span>
          <div className={styles.projects__project__body__links}>
            <a 
              className={styles.projects__project__body__links__link}
              href={github}
            >
              <img className={styles.projects__project__body__links__link__img} src={githubLogo} alt="github" />
              <p className={styles.projects__project__body__links__link__text}>See my repo!</p>
            </a>
            <a 
              className={styles.projects__project__body__links__link}
              href={link}
            >
              <img className={styles.projects__project__body__links__link__img} src={toGoIcon} alt="see the app" />
              <p className={styles.projects__project__body__links__link__text}>Check it out!</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}