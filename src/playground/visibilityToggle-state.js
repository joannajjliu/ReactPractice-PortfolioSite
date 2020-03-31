class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    };
    handleToggleVisibility(visibility) {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    };
    render() {
        return(
            <div>
                <h1>Handle Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide text' : 'Show text'}
                </button>
                {this.state.visibility ? <p>Hello, you found me!</p> : ''}
            </div>
        )
    };
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));