import { Link } from 'react-router-dom';
import SimpleButton from "./SimpleButton";

const ProjectCard = ({ project }) => (
  <Link to={`/project/${project.id}`} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 duration-300 ease-in-out flex flex-col h-full no-underline">
    <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
    <div className="p-6 flex flex-col flex-grow">
      <h3 className="text-2xl font-semibold text-white mb-2">{project.name}</h3>
      {/* <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p> */}
      <div className="mt-auto flex justify-start space-x-2"> 
        <SimpleButton 
          as="a" 
          href={project.githubUrl} 
          target="_blank" 
          variant="outline"
          onClick={(e) => e.stopPropagation()} // Prevent event bubbling
        >
          Code
        </SimpleButton>
        <SimpleButton 
          as="a" 
          href={project.liveDemoUrl} 
          target="_blank"
          onClick={(e) => e.stopPropagation()} // Prevent event bubbling
        >
          Demo
        </SimpleButton>
      </div>
    </div>
  </Link>
);

export default ProjectCard;