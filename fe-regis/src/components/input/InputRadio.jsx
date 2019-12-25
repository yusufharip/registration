import React from 'react';
import styled from 'styled-components';

const Label = styled.label `
    text-transform: capitalize
`

class InputRadio extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {this.props.onValueChange(e.target.value)}

    render() {
        const genders = ['male', 'female'];
        const listGender = genders.map((gender, index) =>
            <div key={index} className="form-check">
                <Label>
                    <input
                        type="radio"
                        name="react-tips"
                        value={gender}
                        checked={this.props.gender === gender}
                        onChange={this.handleChange}
                        className="form-check-input"
                    />
                    {gender}
                </Label>
            </div>
        );

        return listGender;
    }
}

export default InputRadio;