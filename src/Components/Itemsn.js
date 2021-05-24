import react from 'react'
import './Navegacion.css'
class items extends react.Component {
    render() {
        const { navo } = this.props;
        return (
            <div className="container">
                <nav id="navega">
                    <h1>{navo.text0}</h1>
                    <div>
                        <ul id="items">
                            <li>{navo.text}</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default items;