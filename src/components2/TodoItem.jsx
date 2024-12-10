export default function TodoItem(props){

    return(
        <div>
            <li>
                {props.tasks}
                <button onClick={props.onDelete}> Delete </button>
            </li>
        </div>
    )
}