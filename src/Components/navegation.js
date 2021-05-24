import react from 'react'
import Iter from './Itemsn.js'

class navs extends react.Component {
    render() {
        return (
            <div>{this.props.navi.map(e => <Iter navo={e}/>)}</div>
        )
    }
}

export default navs;

