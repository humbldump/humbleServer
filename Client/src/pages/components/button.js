import React, { Component } from 'react'

export default class button extends Component {
  constructor(params) {
    const events = {
      click: function (param) {},
    }

    super(params)
    this.props = params
    this.events = params.buttonData.events ? params.buttonData.events : events
  }
  render() {
    return (
      <div className='button_section'>
        <button
          onClick={this.events.click.bind(this)} //Tıklama
          id={this.props.buttonData.name}
        >
          {this.props.buttonData.text}
        </button>
      </div>
    )
  }
}
