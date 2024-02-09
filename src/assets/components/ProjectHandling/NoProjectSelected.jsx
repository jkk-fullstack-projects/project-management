import { useContext } from 'react';

import noProjectsImage from '../../../assets/no-projects.png'
import Button from '../Utilities/Button.jsx'
import { ProjectContext } from '../../../store/project-context.jsx';

export default function NoProjectSelected() {
    // Context
    const { startAddProject } = useContext(ProjectContext);

    return (
        <div className='mt-24 text-center w-2/3'>
            <img 
                src={noProjectsImage} 
                alt='tyhjä tehtävälista'
                className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Et valinnut projektia</h2>
            <p className='text-stone-400 mb-4'>Valitse projekti tai aloita uusi.</p>
            <p className='mt-8'>
                <Button onClick={startAddProject}>Luo uusi projekti</Button>
            </p>
        </div>
    )
}