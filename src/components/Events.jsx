import {useState} from "react";

export default function Events() {
    const [data, setData] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        setData(inputValue);
    }

    return (
        <div>
            <form>
                <span>
                    <input
                        placeholder={"Enter text"} onChange={handleInputChange}
                    />
                </span>
                <span>
                    <button
                        type={"button"} onClick={handleButtonClick}>Ok
                    </button>
                </span>
            </form>
            <p>{data}</p>
        </div>
    )
}