import React from "react";
import ProjectCard from "./ProjectCard";
import user1 from '../../assets/redUser.png'
import user2 from '../../assets/greenUser.png';
import user3 from '../../assets/blueUser.png';

const dummyProjects = [
  {
    name: "Project xyz",
    client: "Client 123",
    dueDate: "30/08/25",
    progress: 74,
    progressColor: "bg-green-500",
    status: "In Progress",
    team: [user3, user1, user2],
    extra: 4,
    healthLabel: "Healthy",
    healthColor: "bg-green-100 text-green-600",
  },
  {
    name: "Project xyz",
    client: "Client 123",
    dueDate: "10/07/25",
    progress: 38,
    progressColor: "bg-yellow-400",
    status: "In Progress",
    team: [user3, user1, user2],
    extra: 4,
    healthLabel: "At Risk",
    healthColor: "bg-yellow-100 text-yellow-600",
  },
  {
    name: "Project xyz",
    client: "Client 123",
    dueDate: "30/08/25",
    progress: 22,
    progressColor: "bg-red-500",
    status: "In Progress",
    team: [user3, user1, user2],
    extra: 4,
    healthLabel: "Critical",
    healthColor: "bg-red-100 text-red-600",
  },
  {
    name: "Project xyz",
    client: "Client 123",
    dueDate: "30/08/25",
    progress: 22,
    progressColor: "bg-red-500",
    status: "In Progress",
    team: [user3, user1, user2],
    extra: 4,
    healthLabel: "Critical",
    healthColor: "bg-red-100 text-red-600",
  },
  {
    name: "Project xyz",
    client: "Client 123",
    dueDate: "30/08/25",
    progress: 74,
    progressColor: "bg-green-500",
    status: "In Progress",
    team: [user3, user1, user2],
    extra: 4,
    healthLabel: "Healthy",
    healthColor: "bg-green-100 text-green-600",
  },
  {
    name: "Project xyz",
    client: "Client 123",
    dueDate: "10/07/25",
    progress: 38,
    progressColor: "bg-yellow-400",
    status: "In Progress",
    team: [user3, user1, user2],
    extra: 4,
    healthLabel: "At Risk",
    healthColor: "bg-yellow-100 text-yellow-600",
  },
];

const ProjectGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
      {dummyProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default ProjectGrid;
