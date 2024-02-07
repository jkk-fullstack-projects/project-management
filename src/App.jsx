import { useState } from "react";

import NewProject from "./assets/components/ProjectHandling/NewProject.jsx";
import NoProjectSelected from "./assets/components/ProjectHandling/NoProjectSelected.jsx";
import Sidebar from "./assets/components/UserInterface/Sidebar.jsx";
import SelectedProject from "./assets/components/ProjectHandling/SelectedProject.jsx";
import { ProjectContext } from "./store/project-context.jsx";

function App() {
  
  const [projectsState, setProjectsState] = useState({
    // selectedProjectId undefined - doing nothing, selectedProjectId null - adding a new project
    selectedProjectId: undefined,
    projects: [],
  });

  function handleAddTask(text) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map(project => {
          if(project.id === prevState.selectedProjectId) {
            project.tasks = project.tasks.concat({
              text, 
              id: crypto.randomUUID(),
            });
          }
          return project;
        })
      };
    });
  }


  function handleDeleteTask(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.map(project => {
          if (project.id === prevState.selectedProjectId) {
            project.tasks = project.tasks.filter(task => task.id !== id);
          }
          return project;
        })
      };
    });
  }


  function handleSelectProject(id) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const projectId = crypto.randomUUID();
      const newProject = {
        ...projectData,
        id: projectId,
        tasks: [],
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  console.log(projectsState)

  function handleDeleteProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

   // Context 
   const ctxValue = {
    projects: projectsState.projects,
    startAddProject: handleStartAddProject,
    selectProject: handleSelectProject,
    deleteProject: handleDeleteProject,
    cancelAddProject: handleCancelAddProject,
  };

  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = <NewProject 
      onAdd={handleAddProject} 
      onCancel={ctxValue.cancelAddProject}/>
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected 
      onStartAddProject={handleStartAddProject}/>
  }

  return (
    <ProjectContext.Provider value={ctxValue}>
      <main className="h-screen my-8 flex gap-8">
        <Sidebar 
          onStartAddProject={ctxValue.startAddProject}
          projects={ctxValue.projects}
          onSelectProject={ctxValue.selectProject}
          selectedProjectId={ctxValue.projects.selectedProjectId} //
        />
          {content}
      </main>
    </ProjectContext.Provider>
  );
}

export default App;
