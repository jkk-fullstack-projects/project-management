
import { useState, useRef, useContext } from "react";

import Button from "../Utilities/Button.jsx";
import Modal from "../UserInterface/Modal.jsx";
import { ProjectContext } from "../../../store/project-context.jsx";

export default function NewTask() {
    const [enteredTask, setEnteredTask] = useState('');
    const modal = useRef();
    const task = useRef();

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }
    
    function handleClick() {
        if (enteredTask.trim() === '') 
            {
                modal.current.open();
                return;
            }
        addTask(enteredTask);
        setEnteredTask('');
    }
    
    // Context
    const { addTask } = useContext(ProjectContext);

    return (
        <>
         <Modal ref={modal} buttonText="Klikkaa jatkaaksesi">
            <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>Puutteellinen syöte!</h2>
            <p className='text-stone-400 mb-4'>Varmista, että tehtäväkentässä on sopiva tieto.</p>
        </Modal>    
        <div className="flex items-center gap-2">
            <input 
                type="text" 
                ref={task}
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
                
            />
            <Button 
                onClick={handleClick}
            >
                Lisää uusi tehtävä projektille
            </Button>
        </div>
        </>
    );
}