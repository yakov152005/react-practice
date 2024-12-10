export default function Lists(props){

    return(
        <div>
            <ul>
                {props.namesList.map((name,index) => 
                    <li key={index}>{name}</li>
                )}
            </ul>
        </div>
    )
}