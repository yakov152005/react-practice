import Greeting from "./Greeting";
import Counter from "./Counter";
import Lists from "./Lists";
import Events from "./Events";

export default function Main1(){
    const namesList = ["John","Jane","Doe"];


    return (
        <div className="App">
            <Greeting name={"yakov"}/>

            <div><Counter/></div>

            <div><Lists namesList={namesList}/></div>

            <div><Events/></div>
        </div>
    );
}