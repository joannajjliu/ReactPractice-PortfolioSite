// const obj = {
//     name: 'Jojo',
//     getName() {
//         return this.name;
//     }
// };

// const func = function() {
//     console.log(this);
// }
// func(); //returns undefined, because functions have no 'this' property

// const getName = obj.getName.bind({ name: "newName??" });

// console.log("obj.getName():", getName());

class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options,
            selectedOption: ''
        };
    };
    handleDeleteOptions() {
        this.setState(() => ({
            options: [],
            selectedOption: ''
        }))
    };
    handleDeleteOption(option) {
        this.setState((prevState) => ({
            options: prevState.options.filter(item => item !== option)
        }));
    }
    handlePick() {
        const optionNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[optionNum]
        this.setState(() => ({selectedOption}))
    };
    handleAddOption(option) {
        if (!option) {
            return 'You have not entered a valid option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option has already been entered, please try again';
        }
        this.setState((prevState) => ({
                options: prevState.options.concat(option),
                selectedOption: ''
            })
        );
    };
    render() {
        const subtitle = "Have your computer make decisions for you";

        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                    selectedOption={this.state.selectedOption}
                />
            </div>
        );
    }
};

IndecisionApp.defaultProps = {
    options: []
};

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
};

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>
                Remove All
            </button>
            <p>The number of options is {props.options.length}</p>
            <p>Your options are:</p>
            <ol>
                {props.options.map(option => {
                    return <Option 
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                            />
                })}
            </ol>
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <li>
                {props.optionText}
                <button 
                    onClick={(e) => {
                        props.handleDeleteOption(props.optionText);
                    }}
                >
                    Delete Option
                </button>
            </li>
        </div>
    );
};

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    };
    handleAddOption(e) {
        e.preventDefault();
        
        const input = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(input);
        this.setState(() => ({error}))
    };

    render() {
        return (
            <div>
                <p style={{color:'red'}}>{this.state.error}</p>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Submit Option</button>
                </form>
            {this.props.selectedOption && 
                <p style={{color:'blue', fontWeight:'bold'}}>You should do {this.props.selectedOption}</p>
            }
            </div>
        );
    }
};

// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<IndecisionApp options={['Devils den', 'Second district']}/>, document.getElementById("app"));
