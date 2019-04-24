import React from 'react';
import { Facebook } from 'react-content-loader'
import './App.css';

export default function EmployeeSkeleton(){
  return (
    <div class="card-container">
      <div class="card-body">
        <Facebook />
      </div>
      <div class="card-body">
        <Facebook />
      </div>
      <div class="card-body">
        <Facebook />
      </div>
      <div class="card-body">
        <Facebook />
      </div>
    </div>
 );
}
