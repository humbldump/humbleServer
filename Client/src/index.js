import React from 'react'
import ReactDom from 'react-dom'

import Index from './pages/index'
import './styles/main.scss'

function Greetins() {
  return <Index></Index>
}

ReactDom.render(<Greetins />, document.getElementById('root'))
