import { createContext, useState } from "react";

import NewProject from '../assets/components/ProjectHandling/NewProject';
import NoProjectSelected from '../assets/components/ProjectHandling/NoProjectSelected';
import SelectedProject from '../assets/components/ProjectHandling/SelectedProject';

export const ProjectContext = createContext({
    projects: [],
    startAddProject: () => {},
    selectProject: () => {},
    deleteProject: () => {},
    cancelAddProject: () => {},
    selectedProjectId: "",
    addTask: () => {},
    deleteTask: () => {},
    selProject: [],
});

export default function ProjectContextProvider({ children }) {
    const [projectsState, setProjectsState] = useState({
        // selectedProjectId undefined - doing nothing, selectedProjectId null - adding a new project
        selectedProjectId: undefined,
        projects: [],
        selectedProject: undefined,
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
        })};
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
        addProject: handleAddProject,
        startAddProject: handleStartAddProject,
        selectProject: handleSelectProject,
        deleteProject: handleDeleteProject,
        cancelAddProject: handleCancelAddProject,
        selProjectId: projectsState.selectedProjectId,
        addTask: handleAddTask,
        deleteTask: handleDeleteTask,
        selProject: projectsState.selectedProject,
    };

    const selectedProject = ctxValue.projects.find(
        (project) => project.id === ctxValue.selProjectId
    );

    ctxValue.selProject = selectedProject;


    return <ProjectContext.Provider value={ctxValue}>
        {children}
    </ProjectContext.Provider>
};


