import React, { Component } from "react";
// import { Card, Container, Row, Form } from 'react-bootstrap';
import './index.css';
import axios from "axios";
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  componentDidMount() {
    axios.get('https://randomuser.me/api/?results=20')
      .then(res => {
        // this.setState({ })
        console.log(res);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>Hello There</div>
    )
  }
}

export default App;
