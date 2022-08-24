import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() {
        const playerInfo = this.props
        return (
            <div className='tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 fl w-20'>
                <img src={playerInfo.imgUrl} alt='player'/>
                <div>
                        <h2>{playerInfo.name}</h2>
                        <p>{playerInfo.instagram}</p>
                </div>
            </div>
        );
    }
}

export default Card;