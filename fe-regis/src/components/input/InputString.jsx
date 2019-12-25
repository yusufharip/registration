import React from 'react';

class InputString extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            condition: 'hide'
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {this.props.onValueChange(e.target.value)}

    render() {
        console.log(this.props.warning);
        let notification = '';
        if(this.props.warning !== undefined){
            const data = Object.keys(this.props.warning);
            
            Object.keys(data).forEach(key=>{
                if(data[key] === this.props.name){
                    notification = this.props.warning[this.props.name];
                }
            });
        }

        return (
            <div className="form-group">
                <div className={`warning ${this.state.condition}`}>
                    {notification}
                </div>
                <input 
                    className="form-control"
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.handleChange} 
                    placeholder={this.props.placeholder}
                    required={this.props.required}
                />
            </div>
        );
    }
}

export default InputString;