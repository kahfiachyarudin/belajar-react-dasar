import { useState } from "react";

export default function Counter(){
    let [counter, setCounter] = useState(0);
    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1); 
                console.log(counter);}}>
                increment
            </button>
            <h1>Count : {counter}</h1>
        </div>
    );
}