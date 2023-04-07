import React from 'react';

class TaskTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            login: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        // console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>
                        First Name:
                        <input type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Last Name:
                        <input type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange} />
                    </label>
                </p>
                <p>
                    <label>
                        Login:
                        <input type="text" name="login" value={this.state.login} onChange={this.handleChange} />
                    </label>
                </p>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default TaskTwo;

