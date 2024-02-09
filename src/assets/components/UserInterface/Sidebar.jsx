import { useContext } from 'react';

import Button from '../Utilities/Button.jsx';
import { ProjectContext } from '../../../store/project-context.jsx';

export default function Sidebar() {
    // Context 
    const { 
        startAddProject, 
        projects, 
        selectedProjectId, 
        selectProject 
        }  = useContext(ProjectContext);

    return (
        <aside className="w-1/3 px-8 py-16 bg-blue-400 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-100">Veneen projektit</h2>
            <div>
                <Button 
                    onClick={startAddProject}
                    disabled={selectedProjectId === null}
                >
                    + Valitse tai lisää projekti
                </Button>
            </div>
            <ul className="mt-2">
                {projects.map((project) => { 
                    let cssClasses="w-full text-left px-2 py-1 rounded-sm my-1 bg-blue-600 hover:text-stone-100 hover:bg-blue-700"
                    
                    if (project.id === projects.selectedProjectId) {
                        cssClasses += ' bg-blue-700 text-stone-100'
                    } else {
                        cssClasses += ' text-stone-300'
                    }
                    return (
                        <li key={project.id}>
                            <button 
                                className={cssClasses}
                                onClick={() => selectProject(project.id)}
                                disabled={projects.selectedProjectId === null}
                            >
                                {project.title}
                            </button>
                        </li>
                    );           
                })}
            </ul>
        </aside>
    );
};