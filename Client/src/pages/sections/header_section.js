import React, { Component } from 'react'
import Navbar from '../components/navbar'
import Title from '../components/title'
import downLogo_svg from '../../styles/img/svg_icons/down_arror.svg'

export default class header_section extends Component {
  render() {
    return (
      <section className='main_section'>
        <Navbar />
        <Title />
        <div className='explore_my_world'>
          <div className='flex_column'>
            <span>Dünyamı Keşfet</span>
            <div className='down_arrow'>
              <img src={downLogo_svg} alt='explore my world' />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
