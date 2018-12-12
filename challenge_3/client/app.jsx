class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      form: 0
     }

     this.nextPage = this.nextPage.bind(this);
  }

  nextPage() {
    console.log('PREV STATE: ', this.state);
    this.setState({
      form: this.state.form === 4? 0 : this.state.form + 1
    });
  }

  render() { 
    if (this.state.form === 0) {
      return (<Checkout handler={this.nextPage} />);
    }
    if (this.state.form === 1) {
      return (<Account handler={this.nextPage} />);
    }
    if (this.state.form === 2) {
      return (<Shipping handler={this.nextPage} />);
    }
    if (this.state.form === 3) {
      return (<Billing handler={this.nextPage} />);
    }
    if (this.state.form === 4) {
      return (<Summary handler={this.nextPage} />);
    }
  }
}


// -------- PAGES -------- //
const Checkout = props => (
  <button onClick={props.handler}>Checkout</button>
)

const Account = props => (
  <button onClick={props.handler}>Shipping</button>
)

const Shipping = props => (
  <button onClick={props.handler}>Billing</button>
)

const Billing = props => (
  <button onClick={props.handler}>Summary</button>
)

const Summary = props => (
  <button onClick={props.handler}>PURCHASE</button>
)

 

ReactDOM.render(
  <App />,
  document.getElementById('App')
);

