import React from 'react'
import logo_img from '../../styles/img/logo.png'
export default function title() {
  return (
    <div className='main_section_body'>
      <div className='body_flex_column'>
        <div className='main_body_logo'>
          <img src={logo_img} alt='HumblDump Logo' />
        </div>

        <div className='main_body_texts'>
          <div className='main_body_texts_title'>
            <h2>A front-end developer</h2>
          </div>
          <div className='main_body_texts_sub_title'>
            <span>
              I'm thinking,designing, building , coding and publishing
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
