import styles from './Presentation.module.scss';
import classNames from 'classnames';

export default function Presentation() {
  return(
    <main>
      <div className={styles.presentation}>
        <section className={styles.presentation__introduction}>
          <h1 className={classNames({
            [styles.presentation__title]: true,
            [styles.presentation__titleColor]: true
          })}>Hi there!</h1>
          <p className={styles.presentation__title}>{'I\'m Cassiano,'}</p>
          <p className={styles.presentation__title}>{'Web Developer'}</p>
        </section>
        <section className={styles.presentation__story}>
          <div className={styles.presentation__detail}>
            <span className={styles.presentation__detail__square}></span>
            <span className={styles.presentation__detail__verticalLine}></span>
          </div>
          <div className={styles.presentation__story__body}>
            <h2 className={styles.presentation__topics}>{'My story'}</h2>
            <p className={styles.presentation__story__body__text}>Graduated as mechanical engineer, I had a brief contact with programming during college, 
            and that is how an interest and affinity arose. I am working on my career transition to front-end development, 
            studying, developing and practicing on personal projects. At the moment, I am focusing on building applications with React and Typescript, 
            but I am always interested in adding new technologies to my repertoire.</p>
          </div>
        </section>

        <section className={styles.presentation__education}>
          <div className={styles.presentation__detail}>
            <span className={styles.presentation__detail__square}></span>
            <span className={styles.presentation__detail__verticalLine}></span>
          </div>
          <div className={styles.presentation__list__body}>
            <h2 className={styles.presentation__topics}>{'Education'}</h2>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                Mechanical Engineer (gratuated in 2017) at Facens - Faculdade de 
                Engenharia de Sorocaba
              </p>
            </div>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                More than 350 hours of tech stydy at Alura. 
                <a className={styles.presentation__list__body__topic__link} href='https://cursos.alura.com.br/user/cassiano-aalmeida/fullCertificate/1ce9e00a1922b736fe05dd3a28395841'>See here!</a>
              </p>
            </div>
          </div>
        </section>
        
        <section className={styles.presentation__languages}>
          <div className={styles.presentation__detail}>
            <span className={styles.presentation__detail__square}></span>
            <span className={styles.presentation__detail__verticalLine}></span>
          </div>
          <div className={styles.presentation__list__body}>
            <h2 className={styles.presentation__topics}>{'Languages'}</h2>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                Portuguese - Native
              </p>
            </div>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                English - Professional
              </p>
            </div>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                Spanish - Professional
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}