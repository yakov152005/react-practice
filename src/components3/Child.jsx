export default function Child({data,appValue}){


    return(
        <div>
            <div>
                <li>{data} * {2} = {data}</li>
            </div>

            <br/>
            <button onClick={appValue}>Multiply by 2</button>
        </div>
    )
}