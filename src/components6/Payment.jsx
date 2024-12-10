export default function Payment(props) {
    return (
        <div>
            <select  id="payment" value={props.selectedPayment} onChange={props.handleChange}>
                {props.data.map((payment, index) => (
                    <option
                        disabled={index === 0}
                        value={payment}
                        key={index}
                    >
                        {payment}
                    </option>
                ))}
            </select>
        </div>
    );
}
