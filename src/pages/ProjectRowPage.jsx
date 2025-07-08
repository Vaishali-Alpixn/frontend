import React from "react";
import ProjectHeader from "../components/Project/ProjectHeader";
import ProjectDashboard from "../components/Project/ProjectDashboard";
import ProjectRowCard from "../components/Project/ProjectRowCard";
import ProjectFooter from "../components/Project/ProjectFooter";

const ProjectRowPage = () => {
  return (
    <div className="space-y-6">
      <ProjectHeader />


      <ProjectDashboard />

      <div className="space-y-2">
        <ProjectRowCard />
        <ProjectRowCard />
        <ProjectRowCard />
        <ProjectRowCard />
        <ProjectRowCard />
      </div>

        <ProjectFooter />
    </div>
  );
};

export default ProjectRowPage;
