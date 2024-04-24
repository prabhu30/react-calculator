import { useEffect, useState } from "react";

function Calculator() {
    const [ input, setInput ] = useState("");
    const btnStyles = "bg-slate-800 w-12 h-12 text-xl rounded-full focus:outline-none focus:border-none";
    
    const handleInput = (userInput) => {
        if (userInput == '=') {
            setInput(prevState => eval(prevState).toFixed(2));
        }
        else
        setInput(prevState => prevState + userInput);
    }

    function handleKeyPress(event) {
        const key = event.key;
        const validKeys = [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '*', '+', '/', '-', '.', '='];
        if (key == 'Enter')
            handleInput('=');
        else if (validKeys.includes(key))
            handleInput(key);
        else
            alert('Invalid key pressed. Please try with valid key.');
    }

    function handleBackSpace(event) {
        if (event.key == 'Backspace')
            setInput(prevState => prevState.slice(0, prevState.length - 1))
    }

    useEffect(() => {
        document.addEventListener('keypress', handleKeyPress)
        document.addEventListener('keyup', handleBackSpace);
    }, [])

    return (
        <div className="w-[300px] h-[30rem] text-gray-300 bg-gray-300 rounded-xl mx-auto mt-6 py-8">
            <div className="w-10/12 h-24 bg-slate-800 mx-auto rounded-xl text-3xl flex justify-end items-center px-6 font-mono mb-6 overflow-hidden">
                {input}
            </div>

            <div className="mx-auto text-center mb-6 w-10/12 flex justify-around">
                <button className="bg-orange-500 h-10 w-2/5 font-bold rounded-xl focus:outline-none focus:border-none" onClick={() => setInput('')}>CLEAR</button>
                <button className="bg-blue-900 h-10 w-2/5 font-bold rounded-xl focus:outline-none focus:border-none" onClick={() => {
                    setInput(prevState => prevState.slice(0, prevState.length - 1))
                }}>DELETE</button>
            </div>

            <div className="w-10/12 mx-auto mt-4 flex justify-between">
                <button className={btnStyles} onClick={() => handleInput('7')}>7</button>
                <button className={btnStyles} onClick={() => handleInput('8')}>8</button>
                <button className={btnStyles} onClick={() => handleInput('9')}>9</button>
                <button className={btnStyles} onClick={() => handleInput('/')}>÷</button>
            </div>

            <div className="w-10/12 mx-auto mt-4 flex justify-between">
                <button className={btnStyles} onClick={() => handleInput('4')}>4</button>
                <button className={btnStyles} onClick={() => handleInput('5')}>5</button>
                <button className={btnStyles} onClick={() => handleInput('6')}>6</button>
                <button className={btnStyles} onClick={() => handleInput('*')}>X</button>
            </div>

            <div className="w-10/12 mx-auto mt-4 flex justify-between">
                <button className={btnStyles} onClick={() => handleInput('1')}>1</button>
                <button className={btnStyles} onClick={() => handleInput('2')}>2</button>
                <button className={btnStyles} onClick={() => handleInput('3')}>3</button>
                <button className={btnStyles} onClick={() => handleInput('+')}>+</button>
            </div>

            <div className="w-10/12 mx-auto mt-4 flex justify-between">
                <button className={btnStyles} onClick={() => handleInput('0')}>0</button>
                <button className={btnStyles} onClick={() => handleInput('.')}>.</button>
                <button className={btnStyles} onClick={() => handleInput('=')}>=</button>
                <button className={btnStyles} onClick={() => handleInput('-')}>-</button>
            </div>
        </div>
    )
}

export default Calculator