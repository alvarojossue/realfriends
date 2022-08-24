import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div className='bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img src='https://www.realmadrid.com/img/vertical_380px/benzema_av38083_20220809044617.jpg' alt='player'/>
                <div>
                        <h2>Jane Doe</h2>
                        <p>jane@gmail.com</p>
                </div>
            </div>
        );
    }
}

export default Card;