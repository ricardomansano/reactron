import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import DeleteForever from '@material-ui/icons/DeleteForever';

import AppButton from './app-button'

export default class BasicForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: Array(),
      f1: '',
      f2: ''
    }
  }

  onClickSubmit = (e) => {
    this.state.data.push({ list: [this.state.f1, this.state.f2] })
    this.setState({ f1: '', f2: '' })
    f1.focus()
    e.preventDefault()
  }

  onTextChange = (e) => {
    // SetState with dynamic name 
    const { id, value } = e.target
    this.setState({ [id]: value })
  }

  delItem = (key) => {
    this.state.data.splice(key, 1)
    this.setState({ f1: '', f2: '' });
  }

  render() {
    return (
      <div style={{ margin: 4 }}>
        <p align="right"><b>source: </b>basic-form.js</p>
        <h2>Simple form with interaction between components.</h2>

        <form onSubmit={() => { this.onClickSubmit(event) }}>
          <TextField
            required id="f1" value={this.state.f1}
            label="Field1" onChange={() => { this.onTextChange(event) }}
          />
          {" "}
          <TextField
            required id="f2" value={this.state.f2}
            label="Field2" onChange={() => { this.onTextChange(event) }}
          />
          {" "}

          <AppButton type="submit" size="large">
            Add
          </AppButton>
        </form>

        {this.state.data.map((data, index) => {
          return <BasicItem
            delItem={this.delItem}
            parent={this}
            index={index}
            key={index}
            f2={data.list[0]}
            f1={data.list[1]}
          />
        })
        }
      </div>
    )
  }
}

// Important: Only one default export allowed per module.
class BasicItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      index: props.index
    }
  }

  render() {
    return (
      <div style={{
        margin: 0,
        marginBottom: 2,
        borderBottomColor: "#ff0000",
        borderBottomStyle: "dotted",
        borderBottomWidth: 1
      }}>

        <IconButton color="inherit" size="small"
          onClick={this.props.delItem.bind(this.props.parent, this.state.index)}>
          <DeleteForever />
        </IconButton>

        | {this.props.f2} | {this.props.f1}
      </div>
    );
  }
}

