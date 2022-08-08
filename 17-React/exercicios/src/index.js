import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'

const elemento = <h1>React 2</h1>
ReactDOM.render(elemento, document.getElementById('root'))

ReactDOM.render(<Primeiro />, document.getElementById('root'))