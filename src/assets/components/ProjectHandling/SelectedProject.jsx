import { useContext } from "react";

import Tasks from "../Tasks/Tasks";
import { ProjectContext } from "../../../store/project-context";

export default function SelectedProject() {
    
    // Context
    const { deleteProject, addTask, deleteTask, selProject } = useContext(ProjectContext);

    const formattedDate = new Date(selProject.deadLine).toLocaleDateString('fi-FI', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold- text-stone-600 mb-2">
                        {selProject.title}
                    </h1>
                    <button className="text-stone-600 hover:text-stone-950"
                        onClick={deleteProject}
                    >
                        Poista projekti
                    </button>
                    </div>
                    <p className="mb-4 text-stone-400">{formattedDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">
                        {selProject.description}
                    </p>
                </header>
            <Tasks onAdd={addTask} onDelete={deleteTask} tasks={selProject.tasks} />
        </div>
    );
}