import Project from './Project';
import styles from './Portfolio.module.scss';

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
  return (
    <main className={styles.portfolio}>
      <div className={styles.portfolio__title}>Featured projects</div>
      <div className={styles.portfolio__projects}>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </main>
  );
}