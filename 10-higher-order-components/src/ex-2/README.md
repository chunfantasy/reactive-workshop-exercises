EXERCISE
---

Implement the toggleable HOC that allows toggling a single flag.

````javascript
class User extends Component {
  constructor(props) {
    super(props);
    this.state = {isOn: true};
  }

  toggle = () => {
    this.setState(({isOn}) => ({isOn: !isOn}));
  }

  render () {
    return <div>
      <button onClick={this.toggle}>Toggle</button>
      {this.state.isOn && user.name}
    </div>;
  }
}
````

````javascript
const User = toggleable(({isOn, toggle, user}) => <div>
  <button onClick={toggle}>Toggle</button>
  {isOn && user.name}
</div>);
````
