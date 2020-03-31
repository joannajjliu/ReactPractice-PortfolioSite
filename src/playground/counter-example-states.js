class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        };
    };
    componentDidMount() {
        try {
            const strCnt = localStorage.getItem("currCnt");
            const numCnt = parseInt(strCnt, 10);
            console.log("numCnt: ", numCnt);
            if (!isNaN(numCnt)) {
                this.setState(() => ({
                    count: numCnt
                }))
            }
        } catch (e) {
            //do nothing, keep at constructor state
            console.log("catch e reached");
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.count !== prevState.count) {
            const currCnt = this.state.count;
            localStorage.setItem("currCnt", currCnt);
            console.log("componentDidUpdate");
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    };
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    };
    handleReset() {
        this.setState(() => {
            return {
                count: this.props.count
            };
        });
        /*unadvised alternative - 
            passing in object to set state when prevState isn't needed
        */
        // this.setState({ 
        //     count: 2
        // });
    };
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    };
};

// Counter.defaultProps = { //defaultProps not used because using localStorage
//     count: 5
// };

ReactDOM.render(<Counter count={0}/>, document.getElementById("app"));