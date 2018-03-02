import React, { Component } from 'react';

import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
// import { robots } from './robots';

class App extends Component {
  state = {
    robots: [],
    searchfield: ''
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => {
        this.setState({
          robots: users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email
          }))
        });
        console.log(this.state.robots);
      });
  }

  handleSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    let filteredRobots = [];

    filteredRobots = robots.filter(robot =>
      robot.name.toLowerCase().includes(searchfield.toLowerCase())
    );

    if (!robots.length) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox
          changed={this.handleSearchChange}
          searchValue={searchfield}
        />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
