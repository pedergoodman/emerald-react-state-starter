import { useState } from "react";

function Clicker(props) {
  
    // useState is a function, pass in what wew want the initial value to be 
    // [ currentStateValue, functionToUpdateStateValue ]
    const [ name, setName ] = useState('Peder');
    const [count, setCount ] = useState(0);

    function handleClick() {
        console.log('clicked');
        // this tells Teact that we're making a change
        // react needs to know when state changes so it can update the DOM
        setCount(count + 1)
        // do more shit
    }

    return (
        <div className="App">
            <p>Hello! My name is {name}.</p>
            <p>My favorite color is: {props.color}</p>
            {/* can use an anonyums functio for one thing */}
            {/* <button onClick={() => setCount(count + 1)}> Click me!</button> */}
            {/* or can call a named function  */}
            <button onClick={handleClick}> Click me!</button>
            <p>I've clicked the button {count} times.</p>
        </div>
    );
}

export default Clicker;