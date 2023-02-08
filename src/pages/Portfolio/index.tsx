import Project from './Project';

interface PortfolioProps {
    projects: Array<{
      id: number;
      name: string;
      link: string;
      image: string;
      details: {
        description: string;
        techStack: string[];
        status: string[];
      };
    }>;
  }
  
export default function Portfolio({ projects }: PortfolioProps) {
  return (
    <div className="portfolio">
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
    </div>
  );
}