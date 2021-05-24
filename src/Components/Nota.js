import react from 'react';
import './styles1.css'
import PropsTypes from 'prop-types';


class nota extends react.Component {
    CompleteTarget() {
        return {
            background: this.props.apunte.studied ? "rgb(0 , 0, 0, .2)" : "none",
            boxShadow: this.props.apunte.studied ? "1px 2px 1px" : "none",
            border: "black solid",
            borderRadius: "3px"
        }
    }
    render() {
        const { apunte } = this.props;
        return (
            <div className="tarjeta" style={this.CompleteTarget()}>
                <h2>{apunte.title}</h2>
                <p>{apunte.description}</p>
                <p>{apunte.id}</p>
                <p>{apunte.studied}</p>
                <input id="caja1" type="checkbox"></input>
                <button style={btnStyle}>x</button>
            </div>
        )
    }
}

nota.propTypes = {
    apunte: PropsTypes.object.isRequired
}

const btnStyle = {
    border: "none",
    background: "black",
    color: "white"
};

export default nota;