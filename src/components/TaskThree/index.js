import React from 'react';

class TaskThree extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = parseInt(event.target.value) || 0;
        this.setState({ [name]: value });
    }

    render() {
        const result1 = this.state.number1 * 0.5;
        const result2 = this.state.number2 * 0.05;
        
        return (
            <div>
                <div>
                    <label>
                        Number 1:
                        <input type="text" name="number1" value={this.state.number1} onChange={this.handleChange} />
                    </label>
                    <div>Result 1: {result1}</div>
                </div>
                <div>
                    <label>
                        Number 2:
                        <input type="text" name="number2" value={this.state.number2} onChange={this.handleChange} />
                    </label>
                    <div>Result 2: {result2}</div>
                </div>
            </div>
        );
    }
}

export default TaskThree;