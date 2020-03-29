let count = 0;

const someId = "myidhere";

const addOne = () => {
    console.log("addOne");
    count += 1;
    renderCounterApp();
};

const minusOne = () => {
    console.log("minusOne");
    count -= 1;
    renderCounterApp();
};

const reset = () => {
    console.log("reset");
    count = 0;
    renderCounterApp();
};

const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button 
                id={someId} 
                className="btn-plus-one" 
                onClick={addOne}>+1
            </button>
            <button 
                id={someId} 
                className="btn-minus-one" 
                onClick={minusOne}>-1
            </button>
            <button 
                id={someId} 
                className="btn-reset" 
                onClick={reset}>reset
            </button>
        </div>
    );

    ReactDOM.render(templateTwo, document.getElementById("app"));
};

renderCounterApp();