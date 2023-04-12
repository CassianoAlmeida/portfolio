import styles from './Presentation.module.scss';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export default function Presentation() {
  const { t } = useTranslation();

  return(
    <main>
      <div className={styles.presentation}>
        <section className={styles.presentation__introduction}>
          <h1 className={classNames({
            [styles.presentation__title]: true,
            [styles.presentation__titleColor]: true
          })}>{t('presentation.hiThere')}</h1>
          <p className={styles.presentation__title}>{t('presentation.name')}</p>
          <p className={styles.presentation__title}>{t('presentation.jobTitle')}</p>
        </section>
        <section className={styles.presentation__story}>
          <div className={styles.presentation__detail}>
            <span className={styles.presentation__detail__square}></span>
            <span className={styles.presentation__detail__verticalLine}></span>
          </div>
          <div className={styles.presentation__story__body}>
            <h2 className={styles.presentation__topics}>{t('presentation.myStory')}</h2>
            <p className={styles.presentation__story__body__text}>{t('presentation.storyText')}</p>
          </div>
        </section>

        <section className={styles.presentation__education}>
          <div className={styles.presentation__detail}>
            <span className={styles.presentation__detail__square}></span>
            <span className={styles.presentation__detail__verticalLine}></span>
          </div>
          <div className={styles.presentation__list__body}>
            <h2 className={styles.presentation__topics}>{t('presentation.education')}</h2>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                {t('presentation.mechanicalEng')}
              </p>
            </div>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                {t('presentation.aluraStudy')} 
                <a className={styles.presentation__list__body__topic__link} href='https://cursos.alura.com.br/user/cassiano-aalmeida/fullCertificate/1ce9e00a1922b736fe05dd3a28395841'>{t('presentation.aluraCertificate')}</a>
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
            <h2 className={styles.presentation__topics}>{t('presentation.languages')}</h2>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                {t('presentation.portuguese')}
              </p>
            </div>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                {t('presentation.english')}
              </p>
            </div>
            <div className={styles.presentation__list__body__topic}>
              <span className={styles.presentation__list__body__topic__mark}>&#x25B6;</span>
              <p className={styles.presentation__list__body__topic__text}>
                {t('presentation.spanish')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}