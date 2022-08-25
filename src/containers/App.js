import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Footer from '../components/Footer';
import { players } from '../components/players'; 
import './App.css';

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
      <div>
        <div className='tc' style={{border: '1px solid white'}}>
          <h1 className='f1 washed-blue'>Real Friends</h1>
          <p className='f4 washed-blue avenir'>Real Madrid Squad 2022-2023</p>
          <SearchBox searchChange={this.onSearchChange} />
        </div>
        <div className='tc'>
          <Scroll>
            <CardList players={filteredPlayers}/>
          </Scroll>
        </div>
        <div className='tc avenir'>
          <Footer />
        </div>
      </div>
      );
  }
}

export default App;