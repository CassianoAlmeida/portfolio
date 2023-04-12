import Project from './Project';
import styles from './Portfolio.module.scss';
import { useTranslation } from 'react-i18next';

interface PortfolioProps {
    projects: Array<{
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
    }>;
  }
  
export default function Portfolio({ projects }: PortfolioProps) {
  const { t } = useTranslation();

  return (
    <main className={styles.portfolio}>
      <div className={styles.portfolio__title}>{t('portfolio.title')}</div>
      <div className={styles.portfolio__projects}>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </main>
  );
}