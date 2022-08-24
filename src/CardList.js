import React from 'react';
import Card from './Card';

const CardList = ({players}) => {
  return (
    <div>
      {
      players.map((user, i) => {
        return (
          <Card 
          key={players[i].id} 
          name={players[i].name} 
          instagram={players[i].instagram} 
          imgUrl={players[i].imgUrl}
          />
        ); 
      })
    }  
    </div>
  );
}

export default CardList;
