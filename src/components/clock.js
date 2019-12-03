import React from 'react';
import withClass from '../hos/withClass';
import PropTypes from 'prop-types';

class Clock extends React.Component {
  constructor(props) {
      console.log("constructor");
    super(props);
    this.state = {date: new Date(), isToggleOn: true};

this.clickstate = this.clickstate.bind(this);

// let user = {
//   firstName: "Вася",
//   sayHi() {
//     alert(`Привет, ${this.firstName}!`);
//   }
// };
// let sayHi = user.sayHi.bind(user); // (*)
// sayHi(); // Привет, Вася!
// setTimeout(sayHi, 1000); // Привет, Вася!

  }

  componentDidMount() {
    console.log("mount");
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  tick() {
  this.setState({
    date: new Date()
  });
}

  componentWillUnmount() {
        console.log("unmout");
  clearInterval(this.timerID);
}

 clickstate() {
  console.log("click");
  this.setState(state => ({
    isToggleOn: !state.isToggleOn
  //
  }));
}

  render() {
    // var now = this.props.now;
  return (
    <React.Fragment>
      <h1 >Привет, мир!</h1>
      <h2 onClick={this.clickstate}> {this.props.now} {this.state.date.toLocaleTimeString()}.</h2>
      <button onClick={this.clickstate}>
  {this.state.isToggleOn ? 'Включено' : 'Выключено'}
</button>
    </React.Fragment>
  );
}
}

export default withClass(Clock, 'car'); // убери, если будет ошибка
