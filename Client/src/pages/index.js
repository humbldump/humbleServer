import React, { Component } from 'react'
import HeaderSection from './sections/header_section'
import WhatCanIDO from './sections/what_can_i_do'

export default class index extends Component {
  render() {
    return (
      <div className='container' id='max_widthh'>
        <HeaderSection />
        <WhatCanIDO />
      </div>
    )
  }
}
