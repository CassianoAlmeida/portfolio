interface ProjectProps {
    project: {
      id: number;
      name: string;
      link: string;
      image: string;
      details: {
        description: string;
        techStack: string[];
        status: string[];
      };
    };
  }
  
export default function Project({ project }: ProjectProps) {
  const { id, name, link, image, details } = project;  return (
    <div className="project" key={id}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <a href={link}>{link}</a>
      <p>{details.description}</p>
      <ul>
        <li>Tech Stack: {details.techStack.join(', ')}</li>
        <li>
         Collaborators: {details.status.join(', ')}
        </li>
      </ul>
    </div>
  );
}