import styles from './Presentation.module.scss';
import myPicture from 'assets/pictures/my-picture.jpg';

export default function Presentation() {
  return(
    <main>
      <div className={styles.presentation}>
        <img src={myPicture} alt="My Picture" className={styles.presentation__picture} />
        <h1 className={styles.presentation__name}>Cassiano Alves de Almeida</h1>
        <p className={styles.presentation__story}>Graduated as mechanical engineer, I had a brief contact with programming during college, 
        and that is how an interest and affinity arose. I am working on my career transition to front-end development, 
        studying, developing and practicing on personal projects. At the moment, I am focusing on building applications with React and Typescript, 
        but I am always interested in adding new technologies to my repertoire.</p>
        <div className={styles.presentation__education}>
          <h2 className={styles.presentation__education__title}>Education</h2>
          <ul className={styles.presentation__education__list}>
            <li className={styles.presentation__education__list__item}>
                Mechanical Engineer (gratuated in 2017)
            </li>
            <li className={styles.presentation__education__list__item}>
                More than 350 hours of tech stydy at Alura. <a className={styles.presentation__education__list__item__link} href='https://cursos.alura.com.br/user/cassiano-aalmeida/fullCertificate/1ce9e00a1922b736fe05dd3a28395841'>See here!</a>
            </li>
          </ul>
        </div>
        <div className={styles.presentation__topics}>
          <h2 className={styles.presentation__topics__title}>Relevant Topics</h2>
          <ul className={styles.presentation__topics__list}>
            <li>sadsads</li>
            <li>sadad</li>
          </ul>
        </div>
      </div>
    </main>
  );
}