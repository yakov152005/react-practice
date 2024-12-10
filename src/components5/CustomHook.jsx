import {useState} from "react";

export default function CustomHook() {
    const [counter, setCounter] = useState(0);

    const handleCount = (id) =>{
        switch (id){
            case 'increment':
                setCounter(counter + 1);
                break;
            case 'decrement':
                setCounter(counter - 1);
                break;
            case 'reset':
                setCounter(0);
                break;
            default:
                break;
        }
    }

   /*
    function useCounter(intervalValue = 0) {
        const [counter, setCounter] = useState(intervalValue);
        const increment = () => setCounter(counter + 1);
        const decrement = () => setCounter(counter - 1);
        const reset = () => setCounter(0);

        return { counter, increment, decrement, reset };
    }

    const { counter, increment, decrement, reset } = useCounter(10);

       return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    */



    return (
        <div>
            <p>Count: {counter}</p>
            <button onClick={() => handleCount("increment")}>Increment</button>
            <button onClick={() => handleCount("decrement")}>Decrement</button>
            <button onClick={() => handleCount("reset")}>Reset</button>
        </div>
    );


}