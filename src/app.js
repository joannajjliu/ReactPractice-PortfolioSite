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
        this.state = {
            options: ['One','Two','Three']
        };
    };
    handleDeleteOptions() {
        this.setState(() => {
            return {
                options:[]
            }
        });
    };
    handlePick() {
        const optionNum = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[optionNum]
        alert(selectedOption);
    };
    handleAddOption(option) {
        console.log(option);
    };
    render() {
        const title2 = "title-2";
        const subtitle = "hello this is the subtitle";

        return (
            <div>
                <Header title={title2} subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0} 
                    handlePick={this.handlePick}
                />
                <Options
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
};

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
};

class Action extends React.Component {
    render() {
        return (
            <div>
                <button 
                    onClick={this.props.handlePick}
                    disabled={!this.props.hasOptions}
                >
                    What should I do?
                </button>
            </div>
        );
    }
};

class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                <p>The number of options is {this.props.options.length}</p>
                <p>Your options are:</p>
                <ol>
                    {this.props.options.map(option => {
                        // console.log(option);
                        return <Option key={option} optionText={option}/>
                    })}
                </ol>
            </div>
        );
    }
};

class Option extends React.Component {
    render() {
        console.log("Option:", this.props)
        return (
            <div>
                <li>{this.props.optionText}</li>
            </div>
        );
    }
};

class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
    }
    handleAddOption(e) {
        e.preventDefault();
        
        const input = e.target.elements.option.value.trim();

        if (input) {
            this.props.handleAddOption(input);
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option"/>
                    <button>Submit Option</button>
                </form>
            </div>
        );
    }
};


ReactDOM.render(<IndecisionApp />, document.getElementById("app"));