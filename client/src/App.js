import React from 'react';

import './App.css';

const App = () => {

  const maincolumns = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  const rows = [];
  rows.length = 1000;

  for( let i = 0; i < rows.length; i++){
    rows.push('a');
  }

  console.log(rows);

  return (
    <div>
       <table style={{width:'327%'}}>
           <tr>
             <th style={{width:'80px'}} ></th>
             {maincolumns.map( column => <input value={column} disabled/>)}
           </tr>
           
          {rows}

       </table>

    </div>
  )
}

export default App

