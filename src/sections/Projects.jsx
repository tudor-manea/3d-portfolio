import { projects } from "../constants";
import SimpleButton from "../components/SimpleButton"; // Changed from Button to SimpleButton
import ProjectCard from "../components/ProjectCard";

const Projects = ({ onSeeAllProjects }) => {
  const projectsToShow = projects.slice(0, 3);

  return (
    <section id="work" className="py-16 md:py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-sm font-medium text-purple-400 uppercase tracking-wider mb-2">
            Browse My Recent
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
          {projectsToShow.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center">
          <SimpleButton // Changed from Button to SimpleButton
            onClick={onSeeAllProjects}
            className="px-8 py-3 text-lg "
            variant="primary" // Example: using primary variant
          >
            See All Projects
          </SimpleButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
