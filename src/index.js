import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Hello from './Hello';
import Card from './Card';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import { players } from './players';  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Real Friends</h1>
      <Card name={players[0].name} instagram={players[0].instagram} imgUrl={players[0].imgUrl}/>
      <Card name={players[1].name} instagram={players[1].instagram} imgUrl={players[1].imgUrl}/>
      <Card name={players[2].name} instagram={players[2].instagram} imgUrl={players[2].imgUrl}/>
      <Card name={players[3].name} instagram={players[3].instagram} imgUrl={players[3].imgUrl}/>
      <Card name={players[4].name} instagram={players[4].instagram} imgUrl={players[4].imgUrl}/>
      <Card name={players[5].name} instagram={players[5].instagram} imgUrl={players[5].imgUrl}/>
      <Card name={players[6].name} instagram={players[6].instagram} imgUrl={players[6].imgUrl}/>
      <Card name={players[7].name} instagram={players[7].instagram} imgUrl={players[7].imgUrl}/>
      <Card name={players[8].name} instagram={players[8].instagram} imgUrl={players[8].imgUrl}/>
      <Card name={players[9].name} instagram={players[9].instagram} imgUrl={players[9].imgUrl}/>
      <Card name={players[10].name} instagram={players[10].instagram} imgUrl={players[10].imgUrl}/>
      <Card name={players[11].name} instagram={players[11].instagram} imgUrl={players[11].imgUrl}/>
      <Card name={players[12].name} instagram={players[12].instagram} imgUrl={players[12].imgUrl}/>
      <Card name={players[13].name} instagram={players[13].instagram} imgUrl={players[13].imgUrl}/>
      <Card name={players[14].name} instagram={players[14].instagram} imgUrl={players[14].imgUrl}/>
      <Card name={players[15].name} instagram={players[15].instagram} imgUrl={players[15].imgUrl}/>
      <Card name={players[16].name} instagram={players[16].instagram} imgUrl={players[16].imgUrl}/>
      <Card name={players[17].name} instagram={players[17].instagram} imgUrl={players[17].imgUrl}/>
      <Card name={players[18].name} instagram={players[18].instagram} imgUrl={players[18].imgUrl}/>
      <Card name={players[19].name} instagram={players[19].instagram} imgUrl={players[19].imgUrl}/>
      <Card name={players[20].name} instagram={players[20].instagram} imgUrl={players[20].imgUrl}/>
      <Card name={players[21].name} instagram={players[21].instagram} imgUrl={players[21].imgUrl}/>
      <Card name={players[22].name} instagram={players[22].instagram} imgUrl={players[22].imgUrl}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
