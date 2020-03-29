
let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    refresh();
};

const refresh = () => {
    const visibilityToggle = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{
                visibility ? 'Hide Details' : 'Show Details'
            }</button>
            <p>{visibility ? "hello I am showing up!" : ""}</p>
        </div>
    );
    
    ReactDOM.render(visibilityToggle, document.getElementById("app"))
};

refresh();