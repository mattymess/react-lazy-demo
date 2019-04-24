import React from 'react';
import './App.css';
import employees from './store';


export default function Employees(){
    return (
      <div class="card-container">
      {employees.map(artist =>(
        <div class="card-body" key={artist.id}>
          <div className="card">
            <h2>{artist.name}</h2>
            <p>Title: {artist.title}</p>
            <p>Office: {artist.office}</p>
            <p>Favorite Food: {artist.favoriteFood}</p>
          </div>
        </div>
      ))}
     </div>
    );
  }

