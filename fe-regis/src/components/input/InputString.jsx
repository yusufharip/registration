import React from 'react';

class InputString extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleChange(e) {this.props.onValueChange(e.target.value)}

    handleClose(e) {
        e.preventDefault();
        delete this.props.warning[this.props.name];
        this.props.deleteWarning(this.props.warning);
    }

    render() {
        let condition = '';
        if(this.props.warning[this.props.name] === undefined){
            condition = 'hide';
        }

        return (
            <div className="form-group">
                <div className={`warning alert alert-danger ${condition}`}>
                    {this.props.warning[this.props.name]}
                    <button onClick={this.handleClose}>X</button>
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