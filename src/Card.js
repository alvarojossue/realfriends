import React, { Component } from 'react';
import './Card.css'

class Card extends Component {
    render() {
        return (
            <div>
                <img className= 'imgPlayer' src='https://www.realmadrid.com/cs/Satellite?blobcol=urldata&blobheader=image%2Fpng&blobkey=id&blobtable=MungoBlobs&blobwhere=1203428812555&ssbinary=true' alt='player'/>
                <div>
                        <h2>Jane Doe</h2>
                        <p>jane@gmail.com</p>
                </div>
            </div>
        );
    }
}

export default Card;