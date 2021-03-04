import React, { Component } from 'react'
import SectionTitle from '../components/section_title'
export default class what_can_i_do extends Component {
  render() {
    return (
      <section className='what_can_i_do_section'>
        <div className='container' id='max_width'>
          <div className='section_inside'>
            <div className='flex_3'>
              <SectionTitle />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
