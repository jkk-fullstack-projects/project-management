import { useContext } from "react";

import Tasks from "../Tasks/Tasks";
import { ProjectContext } from "../../../store/project-context";

export default function SelectedProject({ selectedProject }) {
    const formattedDate = new Date(selectedProject.deadLine).toLocaleDateString('fi-FI', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    // Context
    const { deleteProject, addTask, deleteTask } = useContext(ProjectContext);

    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold- text-stone-600 mb-2">
                        {selectedProject.title}
                    </h1>
                    <button className="text-stone-600 hover:text-stone-950"
                        onClick={deleteProject}
                    >
                        Poista projekti
                    </button>
                    </div>
                    <p className="mb-4 text-stone-400">{formattedDate}</p>
                    <p className="text-stone-600 whitespace-pre-wrap">
                    {selectedProject.description}
                    </p>
                </header>
            <Tasks onAdd={addTask} onDelete={deleteTask} tasks={selectedProject.tasks} />
        </div>
    );
}