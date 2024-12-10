import {useState} from "react";
import TodoList from "./TodoList";

export default function ManagerTasks() {
    const [inputValTask, setInputValTask] = useState('');
    const [dataTask, setDataTask] = useState([]);


    const handleInputValTask = (event) => {
        setInputValTask(event.target.value);
    }

    const handleBtnAddTask = () => {
        if (inputValTask.trim() !== "") {
            setDataTask([...dataTask, inputValTask]);
            setInputValTask('')
        }

    };

    const handleDeleteTask = (indexDelete) => {
        setDataTask(prevDataTask =>
            prevDataTask
                .filter((task, currentIndex) =>
                    currentIndex !== indexDelete
                ));
    };


    return (
        <div>
            <div>Task:
                <input placeholder={"enter text"}
                       value={inputValTask}
                       onChange={handleInputValTask}/>
                <button
                    type={"button"}
                    onClick={handleBtnAddTask}>
                    Add
                </button>
            </div>

            <TodoList tasks={dataTask} onDelete={handleDeleteTask}/>
        </div>
    )
}