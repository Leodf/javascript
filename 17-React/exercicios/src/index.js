import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './components/Primeiro'
// import BomDia from './components/BomDia'
// import { BoaTarde, BoaNoite } from './components/Multiplos'
// import Saudacao from './components/Saudacao'
import Pai from './components/Pai'
import Filho from './components/Filho'

// const elemento = <h1>React 2</h1>
// ReactDOM.render(elemento, document.getElementById('root'))

// ReactDOM.render(<Primeiro />, document.getElementById('root'))
// ReactDOM.render(<BomDia nome='Guilherme' idade={25} />, document.getElementById('root'))
// ReactDOM.render(
//     <div>
//         <BoaTarde nome='Ana' />
//         <BoaNoite nome='Bia' />
//     </div>
// , document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome='Paulo' sobrenome='Silva'>
            <Filho nome='Pedro'/>
            <Filho nome='Paulo' sobrenome='Silva' />
            <Filho nome='Carla' sobrenome='Silva' />
        </Pai>
    </div>
, document.getElementById('root'))