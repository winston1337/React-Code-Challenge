import logo from './logo.svg';
import './App.css';
import React from 'react';
import App from './src/App.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        name: "Winston McHetz",
        dateOfBirth: "01/05/2000",
        number: "587-555-5555",
      },
      people: [
        {
          name: "Jane Smith",
          dateOfBirth: "04/15/1986",
          number: "480-555-5555",
        },
        {
          name: "John Doe",
          dateOfBirth: "12/15/1999",
          number: "704-555-5555",
        },
        {
          name: "Steven Anders",
          dateOfBirth: "07/24/1995",
          number: "396-555-5555",
        },
        {
          name: "Jason Block",
          dateOfBirth: "10/14/1991",
          number: "742-555-5555",
        },
      ]
    };
  }
  render() {
      return this.state.people.map(function (person, index) {
        return <App.js key="{index}" person={person} />;
      })
  }
}

export default App;