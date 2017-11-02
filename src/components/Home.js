import React, { Component } from 'react';
import {RaisedButton} from 'material-ui';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <RaisedButton label="Default" />
      </div>
    );
  }
}