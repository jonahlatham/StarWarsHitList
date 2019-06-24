import React, { Component } from 'react'

const doStuff = () => {
    console.log('crap')
}

class CharacterCards extends Component {
    render() {
        return (
            <div className="starWarsCards">
            <header>
               <u><strong>{this.props.card.name}</strong></u>
            </header>
            <div className="innerCard">
                   Gender: {this.props.card.gender} <br/>
                   Hair Color: {this.props.card.hair_color} <br/>
                   Skin Color: {this.props.card.skin_color} <br/>
                   Height: {`${Math.floor(this.props.card.height/30.48)}ft`} <br/>
            </div>
            <button className="killButton" onClick={() => {this.props.handleKill(this.props.card)}}><strong>Kill</strong></button>
            </div>
        )
    }
}

export default CharacterCards