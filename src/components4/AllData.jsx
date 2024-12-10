import Data from "./Data";

export default function AllData(props){
    return(
        <div>
            {props.data.map((item,index) =>
            <Data
            key={index}
            text={item.text}
            title={item.title}
            img={item.img}
            />
            )}
        </div>
    )
}