export default function Data({ title, text, img }) {
    return (
        <div>
            <ul>
                <li>
                    <p style={{ color: "red" }}>{title}</p>
                    <p>{text}</p>
                    <img src={img} alt={title} />
                </li>
            </ul>
        </div>
    );
}
