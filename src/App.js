import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { players } from './players'; 

class App extends Component {
  constructor(){
    super()
    this.state = {
      players: players,
      searchfield: ''
    }
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  render() {
    const filteredPlayers = this.state.players.filter(player => {
      return player.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
      return (
        <div className='tc'>
        <h1>Real Friends</h1>
        <h2>Real Madrid Squad's Instagram Info</h2>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList players={filteredPlayers}/>
      </div>
      );
  }
}

export default App;