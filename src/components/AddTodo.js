import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
    state = {
        title: ''
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' })
    }

    onChange = (e) => this.setState({
        [e.target.name]:
            e.target.value
    });



    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <div className="input-group input-group-lg">
                    <input className="form-control bg-light border border-dark"
                        type="text"
                        name="title"
                        placeholder="Add ToDo ..."
                        value={this.state.title}
                        onChange={this.onChange}
                        style={{ flex: '10', padding: '5px' }} />

                </div>
                <input className="btn btn-success btn-lg"
                    type="submit"
                    value="Submit"
                    style={{ flex: '1' }} />
            </form>
        )
    }
}
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired,

}

export default AddTodo