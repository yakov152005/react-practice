import TodoItem from "./TodoItem";

export default function TodoList(props){
    return(
        <div>
            {props.tasks.map((task,index) =>
                <TodoItem
                key = {index}
                tasks = {task}
                onDelete = {() => props.onDelete(index)}
                />
            )}


        </div>
    )
}