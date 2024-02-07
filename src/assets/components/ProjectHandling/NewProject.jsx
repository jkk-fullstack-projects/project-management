import { useContext, useRef } from 'react';

import Input from '../Utilities/Input.jsx'
import Modal from '../UserInterface/Modal.jsx';
import { ProjectContext } from '../../../store/project-context.jsx';

export default function NewProject({ onAdd }) {
    const modal = useRef();
    const title = useRef();
    const description = useRef();
    const deadLine = useRef();

    function handleSave() {
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDeadline = deadLine.current.value;

        if (enteredTitle.trim() === '' || 
            enteredDescription.trim() === '' || 
            enteredDeadline.trim() === ''
            ) {
                modal.current.open();
                return;
            }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            deadLine: enteredDeadline
        });
    }
    // Context
    const { cancelAddProject } = useContext(ProjectContext);

    return (
        <>
        <Modal ref={modal} buttonText="Klikkaa jatkaaksesi">
            <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Puutteellinen syöte!</h2>
            <p className='text-stone-400 mb-4'>Unohditkohan syöttää jonkin arvon?</p>
            <p className='text-stone-400 mb-4'>Varmista, että joka kentässä on sopiva tieto.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
               <li>
                    <button
                        className="text-stone-800 hover:text-stone-950"
                        onClick={cancelAddProject}
                    >
                        Peruuta
                    </button>
                </li>
                <li>
                    <button 
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-600"
                        onClick={handleSave}
                    >
                        Tallenna projekti
                    </button>
                </li>
            </menu>
            <div>
               <Input type="text" ref={title} label="Projektin nimi" />
               <Input ref={description} label="Kuvaile projektia" textarea />
               <Input type="date" ref={deadLine} label="Määräaika projektille" />
            </div>
        </div>
        </>
    );
}