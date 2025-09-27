import { Component } from "react";

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            type: props.type,
            name: props.name,
            placeholder: props.placeholder,
            value: props.value,
            onChange: props.onChange
        }
    }

    render() {
        return (
            <input 
                type={this.props.type} 
                size={40}
                name={this.props.name}
                placeholder={this.props.placeholder}
                value={this.props.value}
                onChange={this.props.onChange}>
            </input>
        )
    }
}

export default Input