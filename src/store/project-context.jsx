import { createContext } from "react";

export const ProjectContext = createContext({
    projects: [],
    startAddProject: () => {},
    selectProject: () => {},
    deleteProject: () => {},
    cancelAddProject: () => {},
    selectedProjectId: "",
    addTask: () => {},
    deleteTask: () => {},
});


