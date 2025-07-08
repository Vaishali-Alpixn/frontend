import React from 'react'
import ProjectHeader from '../components/Project/ProjectHeader'
import ProjectDashboard from '../components/Project/ProjectDashboard'
import ProjectGrid from '../components/Project/ProjectGrid'
import ProjectFooter from '../components/Project/ProjectFooter'

const ProjectGridPage = () => {
  return (
    <div>
        <ProjectHeader/>
        <ProjectDashboard />
        <ProjectGrid />
        <ProjectFooter />
    </div>
  )
}

export default ProjectGridPage