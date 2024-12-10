import Child from "./Child";
import {useState} from "react";

export default function Main3(){
    const [value,setValue] = useState(2);

    const handleAddMulti2 = () => {
        setValue(value * 2);
    }

    return(
        <div>
            <Child data={value} appValue={handleAddMulti2}/>
        </div>
    )
}