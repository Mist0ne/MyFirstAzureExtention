import React, { Component } from 'react';

export class TimeLogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            date: null,
            time: null,
            activity: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleClick(event) {
        if (this.state.name != null && this.state.date != null && this.state.time != null && this.state.activity != null)
        {
            var finalData = {
                Name: this.state.name,
                Date: this.state.date,
                Time: this.state.time,
                Activity: this.state.activity,
                Delete: null
            };
            this.props.onDataFromInputChanged(finalData, event);
        }
    }

    handleInputChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <form>
                <div className="time-log-element">
                    <input type="text" name="name" onChange={this.handleInputChange} required />
                    <input type="text" name="date" onChange={this.handleInputChange} required />
                    <input type="text" name="time" onChange={this.handleInputChange} required />
                    <input type="text" name="activity" onChange={this.handleInputChange} required />
                    <input type="submit" value="Добавить!" onClick={this.handleClick}/>
                </div>
            </form>
        );
    }
}

export default TimeLogForm;
