import React from 'react'
import Button from './button'

export default function navbar() {
  return (
    <div className='header_nav'>
      <div className='header_nav_flex'>
        <div className='header_logo'>
          <h1 className='header_h1'>HumblDump</h1>
        </div>
        <div className='header_button'>
          <Button
            buttonData={{
              text: 'Selam Çak',
              name: 'navBar_btn',
            }}
          />
        </div>
      </div>
    </div>
  )
}
