import styles from './Project.module.scss';
import toGoIcon from 'assets/logos/to-go-icon.png';
import githubLogo from 'assets/logos/github-white-logo.png';
import doubleDown from 'assets/icon/double-down.png';
import classNames from 'classnames';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

  const { id, name, link, image, details, github } = project;
  const [toggledClass, setToggledClass] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleClass = () => {
    setToggledClass(!toggledClass);
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleButtonClick = () => {
    toggleClass();
    handleModalToggle();
  };

  const styleImage = {
    backgroundImage: `url(${image})`
  };

  return (
    <div className={styles.projects}>
      <div className={styles.projects__project} key={id} id="project-item">
        <div className={styles.projects__project__figure}>
          <div className={styles.projects__project__figure__desktopCover}>
            <div className={styles.projects__project__figure__desktopCover__name}>{name}</div>
          </div>
          <button 
            className={classNames({
              [styles.projects__project__figure__button]: true,
              [styles.projects__project__figure__buttonHide]: toggledClass
            })}
            onClick={handleButtonClick}
          >
            <p className={classNames({
              [styles.projects__project__figure__title]: true,
              [styles.projects__project__figure__titleHide]: toggledClass
            })}>{name}</p>
            <img className={classNames({
              [styles.projects__project__figure__button__img]: true,
              [styles.projects__project__figure__button__imgFlipped]: toggledClass,
              [styles.projects__project__bodyModal]: isModalOpen
            })} src={doubleDown} alt="down" />
            <p className={styles.projects__project__figure__button__text}>{t('portfolio.button')}</p>
          </button>
          <span className={styles.projects__project__img} style={styleImage} key={id}/>
          <img className={styles.projects__project__img} src={image} alt="" />
        </div>

        
        <div className={classNames({
          [styles.projects__project__body]: true,
          [styles.projects__project__bodyShow]: toggledClass,
          [styles.projects__project__bodyModal]: isModalOpen
        })}>
          <button className={styles.projects__project__body__close} onClick={handleModalToggle}>
            <span className={styles.projects__project__body__closeIcon}>x</span>
          </button>
          <h3 className={styles.projects__project__body__title}>{name}</h3>
          <p className={styles.projects__project__body__description}>{details.description}</p>
          <h4 className={styles.projects__project__body__stackTitle}>{t('portfolio.stack')}</h4>
          <span className={styles.projects__project__body__stackList}>{details.techStack.join(' | ')}</span>
          <div className={styles.projects__project__body__links}>
            <a 
              className={styles.projects__project__body__links__link}
              href={github}
            >
              <img className={styles.projects__project__body__links__link__img} src={githubLogo} alt="github" />
              <p className={styles.projects__project__body__links__link__text}>{t('portfolio.repository')}</p>
            </a>
            <a 
              className={styles.projects__project__body__links__link}
              href={link}
            >
              <img className={styles.projects__project__body__links__link__img} src={toGoIcon} alt="see the app" />
              <p className={styles.projects__project__body__links__link__text}>{t('portfolio.goto')}</p>
            </a>
          </div>
        </div>
      </div>
      <button className={classNames({
        [styles.modalBackground]: true,
        [styles.modalBackground__show]: isModalOpen
      })}
      onClick={handleModalToggle}
      ></button>
    </div>
  );
}