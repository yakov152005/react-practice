import {useState} from "react";
import './style.css';
import Payment from "./Payment";


export default function From() {
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [text, setText] = useState("");
    const [form, setForm] = useState(null);
    const [payment, setPayment] = useState("Select option");
    const [delivery, setDelivery] = useState();
    const optionPay = ["Select option", "Visa", "MasterCard", "ApplePay", "Paypal"];
    const [isWork,setIsWork] = useState(false);

  /*
    function handleName(e) {
        setName(e.target.value);
    }

    function handleAge(e) {
        setAge(e.target.value);
    }

    const handleText = (event) => {
        setText(event.target.value);
    }


    const handlePayment = (event) => {
        setPayment(event.target.value)
    }


    function handleDelivery(event) {
        setDelivery(event.target.value)
        setIsWork(true)
    }
   */

    const handleChange = (event) => {
        const {id, value} = event.target;
        switch (id) {
            case 'name':
                setName(value);
                break;
            case 'age':
                setAge(value);
                break;
            case 'text':
                setText(value);
                break;
            case 'payment':
                setPayment(value);
                break;
            case 'pickUp':
            case 'delivery':
                setDelivery(event.target.value);
                setIsWork(true);
                break;
            default:
                break;
        }
    };

    const resetBtn = () => {
        setDelivery("")
        setIsWork(false)
    }

    function sendForm() {
        if (!name || age <= 0 || !text || payment === "Select option") {
            alert("Please fill in all fields correctly!");
            return;
        }

        setForm(
            <div>
                <ul>
                    <li><strong>Name:</strong> {name}</li>
                    <li><strong>Age:</strong> {age}</li>
                    <li><strong>Text:</strong> {text}</li>
                    <li><strong>Payment:</strong> {payment}</li>
                    <li><strong>Shipment:</strong> {delivery}</li>
                </ul>
            </div>
        );
    }

    return (
        <div className="input-class">
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        id="name"
                        value={name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                    />


                    <label htmlFor="age">Age:</label>
                    <input
                        id="age"
                        value={age}
                        type="number"
                        onChange={handleChange}
                        placeholder="Enter your age"
                    />


                    <label htmlFor="text">Text:</label>
                    <textarea
                        id="text"
                        value={text}
                        onChange={handleChange}
                        placeholder="Enter additional information">

                    </textarea>

                    <label htmlFor="payment">Payment:</label>
                    <Payment
                        data={optionPay}
                        handleChange={handleChange}
                        selectedPayment={payment}
                    />

                    <label htmlFor="pickUp">Pick Up</label>
                    <input id="pickUp"
                           type={"radio"}
                           value="Pick Up"
                           onChange={handleChange}
                           disabled={isWork}
                           checked={delivery === "Pick Up"}
                    />

                    <label htmlFor="delivery">Delivery</label>
                    <input id="delivery"
                           type={"radio"}
                           value="Delivery"
                           onChange={handleChange}
                           disabled={isWork}
                           checked={delivery === "Delivery"}
                    />

                    <button onClick={resetBtn}
                            type={"button"}
                        className="btn btn-primary">
                        Reset Shipment
                    </button>
                </div>

                <button
                    onClick={sendForm}
                    type="button"
                    className="btn btn-primary">
                    Send
                </button>
            </form>

            {form && (
                <div className="form-result">
                    <h3>Submitted Information:</h3>
                    {form}
                </div>
            )}
        </div>
    );
}
