import { useContext } from "react";

import Button from "../Utilities/Button.jsx"
import { ProjectContext } from "../../../store/project-context.jsx";

export default function Sidebar({ children }) {
    // Context 
    const { startAddProject, selectedProjectId }  = useContext(ProjectContext);

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
                {children}
            </ul>
        </aside>
    );
};