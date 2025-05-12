import { projects } from "../constants";
import ProjectCard from "../components/ProjectCard";
import SimpleButton from "../components/SimpleButton"; // Changed from Button to SimpleButton

const AllProjectsPage = ({ onBack }) => {
  return (
    <section id="all-projects" className="py-16 md:py-24 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <SimpleButton // Changed from Button to SimpleButton
            onClick={onBack} 
            className="mb-8 px-6 py-2 text-base inline-flex items-center"
            variant="outline" // Example: using outline variant
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
            Back to Main
          </SimpleButton>
          <h1 className="text-4xl md:text-5xl font-bold text-white">All My Projects</h1>
          <p className="text-purple-400 mt-2 text-lg">Browse through the complete collection of my work.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjectsPage;