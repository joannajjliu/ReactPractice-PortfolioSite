console.log("app.js is running");


const app = {
    title: "Morning",
    subtitle: "Hello World",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        console.log(app.options);
        e.target.elements.option.value = '';
    }
    refresh();
};

const onRemoveAll = () => {
    //e.preventDefault();
    app.options = [];
    refresh();
}

let optionNum = null;

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    console.log(randomNum);
    optionNum = app.options.length != 0 ? randomNum : null;
    refresh();
};

const refresh = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <p id="itemToDo">{app.options[optionNum]}</p>
            <br/>
            <br/>
            <button onClick={onRemoveAll}>Remove All</button>
            <p>Your options are: {app.options.length}</p>
            {app.options && (app.options.length === 0 ? <p>No options</p> :
                <div>
                    <p>Your options are:</p>
                    <ol>
                        {app.options.map(
                            (option, index) => <li key={index}>{option}</li>
                        )}
                    </ol>
                </div>
            )}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, document.getElementById("app"));

}

refresh();

// const getLocation = (location) => {
//     if (location) {
//         return <p>Location: {location}</p>
//     }
// };

// const user = {
//     name: 'Jack',
//     age: 90,
//     location: 'Brazil'
// };

// const exp = (
//     <div>
//         <h1>{user.name.toUpperCase() + '!'}</h1>
//         {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
//         {user.location ? user.location : undefined}
//     </div>
// );



