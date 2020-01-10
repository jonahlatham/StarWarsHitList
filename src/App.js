import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import CharacterCards from './CharacterCards'
import { breakStatement } from '@babel/types';

const baseUrl = 'https://swapi.co/api/people'

class App extends Component {
  state = {
    starwarsguys: [],
    deadCards: [],
  }
  componentDidMount() {
    axios.get(`${baseUrl}`)
      .then((response) => {
        this.setState({
          starwarsguys: response.data.results,
        })
      })
  }
  handleKill = (obj) => {
    const hitList = this.state.starwarsguys.filter((e, i) => {
      if (obj.url === "https://swapi.co/api/people/4/") {
        alert('Darth Vader killed you')
      } else {
      } return e.url !== obj.url

    })
    const deadList = [...this.state.deadCards, obj]
    this.setState({
      starwarsguys: hitList,
      deadCards: deadList
    })
  }
  render() {
    const characters = this.state.starwarsguys.map((e, i) => {
      return <CharacterCards key={i} card={e} handleKill={this.handleKill} />
    })
    const deadGuys = this.state.deadCards.map((e, i) => {
      return <CharacterCards key={i} card={e} name={'black'} color={'red'} handleKill={this.handleKill} />
    })
    return (
      <section>
        <div className="words">
          <h1>Target</h1>
          <h1>Killed</h1>
        </div>
        <div className="App">
          <header className="appHeader">

            <div className="leftSide">
              {characters}
            </div>
            <div className="rightSide">
              {deadGuys}
            </div>
          </header>
        </div>
      </section>
    );
  }
}

export default App;
