import { useState } from "react";
import ProjectHeader from "../components/Project/ProjectHeader";
import ProjectDashboard from "../components/Project/ProjectDashboard";
import ProjectGrid from "../components/Project/ProjectGrid";
import ProjectRowCard from "../components/Project/ProjectRowCard";
import ProjectFooter from "../components/Project/ProjectFooter";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import user1 from "../assets/redUser.png";
import user2 from "../assets/greenUser.png";
import user3 from "../assets/blueUser.png";

export default function Project() {
  const [view, setView] = useState("grid");

  const dummyProjects = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6,
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

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="sticky top-0 z-50 bg-white shadow">
          <Navbar />
        </div>

        <div className="p-6 space-y-6 overflow-y-auto">
          <ProjectHeader onViewChange={setView} view={view} />
          <ProjectDashboard />

          {view === "grid" ? (
            <ProjectGrid projects={dummyProjects} />
          ) : (
            <div className="space-y-2">
              {dummyProjects.map((project) => (
                <ProjectRowCard key={project.id} project={project} />
              ))}
            </div>
          )}

          <ProjectFooter />
        </div>
      </div>
    </div>
  );
}
