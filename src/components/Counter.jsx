import {useState} from "react";

export default function Counter(){
    const[count, setCount] = useState(0);

   // const addCount = () =>{
    //         setCount(count+1);
    //     }

    return(
        <div>
            <button onClick={() => {setCount(count + 1)}}>Count : {count}</button>
        </div>
    )
}