import React, { Component } from 'react';

class Card extends Component {
    render() {
        const playerInfo = this.props
        return (
            <div className='tc bg-light-blue dib br3 pa2 ma2 grow bw2 shadow-5 w5'>
                <img src={playerInfo.imgUrl} alt='player'/>
                <div>
                        <h2>{playerInfo.name}</h2>
                        <p className='f5 avenir'>{playerInfo.instagram}</p>
                </div>
            </div>
        );
    }
}

export default Card;