import { useContext } from 'react';

import NewTask from "./NewTask.jsx"
import Button from "../Utilities/Button.jsx";
import { ProjectContext } from '../../../store/project-context.jsx';

export default function Tasks({ tasks, onAdd, onDelete }) {

    return (
        <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onAddTask={onAdd} />
        {tasks.length === 0 && (
          <p className="text-stone-800 my-4">
                Tälle projektille ei ole vielä tehtäviä.
            </p>
            )}
            {tasks.length > 0 && (
                <ul className="p-4 mt-8 rounded-md bg-stone-100">
                    {tasks.map((task) => (
                        <li key={task.id} className="flex justify-between my-4">
                            <span>{task.text}</span>
                                <Button
                                    className="text-stone-700 hover:text-red-500"
                                    onClick={() => onDelete(task.id)}
                                >
                            Poista tehtävä</Button>
                        </li>
                    ))}
                </ul>
            )}  
        </section>
    );
}