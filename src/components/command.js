import React from 'react';
import TextField from '@material-ui/core/TextField';

import AppButton from './app-button'

// Allows access to backend functions 
const { remote } = require('electron')
const backend = remote.require('./main.js')

export default class Command extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      command: ''
    }
  }

  onTextChange = (e) => {
    // SetState with dynamic name 
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  onClickSubmit = (e) => {
    backend.execProcess(this.state.command, this.execProcessCallBack)
    e.preventDefault();
  }

  execProcessCallBack = (str) => {
    document.getElementById("execProcessCallBack").innerHTML += "<pre>" + str + "</pre>"
  }

  render() {
    return (
      <div style={{ margin: 4 }}>
        <p align="right"><b>source:</b> command.js</p>
        <h2>Execute OS commands via node (exec). </h2>
        <p>Examples:</p>
        <ul>
          <li><b>Linux:</b> ping localhost -c 3</li>
          <li><b>Windows:</b> ping localhost</li>
        </ul>

        <form onSubmit={() => { this.onClickSubmit(event) }}>
          <TextField style={{ minWidth: 300 }}
            required id="command" value={this.state.command}
            label="Command" onChange={() => { this.onTextChange(event) }}
          />

          {" "}
          <AppButton type="submit">
            EXECUTE
          </AppButton>
          {" "}
          <AppButton onClick={() => { document.getElementById("execProcessCallBack").innerHTML = "" }}>
            CLEAN
          </AppButton>
        </form>

        {/* Exibe callback do back-end */}
        <div id="execProcessCallBack"></div>

      </div>
    )
  }
}