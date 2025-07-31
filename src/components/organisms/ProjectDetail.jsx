import { useParams } from 'react-router';
import allProject from '../../data/project.json';

function ProjectDetail() {
  const { id } = useParams();
  const projects = allProject.find((project) => project.id.toString() === id);

  return <div>ProjectDetail {projects?.name}</div>;
}

export default ProjectDetail;
