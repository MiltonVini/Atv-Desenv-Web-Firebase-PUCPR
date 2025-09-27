import { Component } from "react";

class Button extends Component {
    render() {
        return (
            <button className='inputButton' type={this.props.type}>
                {this.props.label}
            </button>
        )
    }
}

export default Button;
