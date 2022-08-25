import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { players } from './players'; 
import './App.css'

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
        <h1 className='f1 washed-blue'>Real Friends</h1>
        <p className='f4 washed-blue avenir'>Real Madrid Squad 2022-2023</p>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList players={filteredPlayers}/>
      </div>
      );
  }
}

export default App;