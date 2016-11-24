const Demo = ({today}) => (
    <div>
        <h1>Fast Prototyping with React</h1>
        <div>
            This is a boilerplate to do fast prototyping with React.
        </div>
        <div>{today}</div>
    </div>
)

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            today: new Date()
        }
    }
    componentDidMount() {
        this.cancelInterval = setInterval(() => {
            this.setState({
                today: new Date()
            });
        }, 999);
    }
    componentWillDismount() {
        clearInterval(this.cancelInterval());
    }
    render() {
        return <Demo today={this.state.today.toString()}/>
    }
};

ReactDOM.render(
    <App />,
    document.getElementById('main')
);

