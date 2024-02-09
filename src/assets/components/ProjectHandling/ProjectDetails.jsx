import React, { useContext } from 'react';
import { ProjectContext } from '../../../store/project-context.jsx'
import NewProject from '../ProjectHandling/NewProject.jsx'
import NoProjectSelected from '../ProjectHandling/NoProjectSelected';
import SelectedProject from '../ProjectHandling/SelectedProject';

function ProjectDetails() {
    // Access context
    const { 
        addProject, 
        startAddProject, 
        deleteProject, 
        cancelAddProject, 
        selProjectId, 
        addTask, 
        deleteTask, 
        selProject 
        } = useContext(ProjectContext);
  
    let content;

    if (selProjectId === null) {
      content = <NewProject onAdd={addProject} onCancel={cancelAddProject} />;
    } else if (selProjectId === undefined) {
      content = <NoProjectSelected onStartAddProject={startAddProject} />;
    } else {
      content = <SelectedProject 
            selectedProject={selProject} 
            onDelete={deleteProject} 
            addTask={addTask} 
            deleteTask={deleteTask} 
        />;
    }
  
    return( 
        <>
            {content}
        </>
    );
  };
  
  export default ProjectDetails;