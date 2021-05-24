import react from 'react'
import Nots from './Nota'

import "./styles2.css"

class notas extends react.Component {

    render() {
        return (<div className="conteiner1">{this.props.notes.map(e => <Nots apunte={e} key={e.id} />)}</div>)
    }
}

export default notas;