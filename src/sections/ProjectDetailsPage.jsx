import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../constants';
import SimpleButton from '../components/SimpleButton';

const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div className="text-white text-center py-10">Project not found</div>;
  }

  return (
    <section className="py-16 md:py-24 bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto"> {/* Changed max-w-3xl to max-w-2xl */}
          <img src={project.image} alt={project.name} className="w-full h-auto object-cover rounded-lg mb-8 max-h-96" /> {/* Added max-h-96 */}
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.name}</h1>
          <div className="flex space-x-4 mb-8">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <SimpleButton variant="secondary">Code</SimpleButton>
              </a>
            )}
            {project.liveDemoUrl && (
              <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <SimpleButton variant="primary">Demo</SimpleButton>
              </a>
            )}
          </div>
          <p className="text-lg text-gray-300 mb-8">{project.description}</p>
          <Link to="/#work">
            <SimpleButton variant="outline">Back to Main</SimpleButton>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailsPage;
