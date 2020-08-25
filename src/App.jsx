import React, { Component } from 'react';
import DataTable from './DataTable';
import TimeLogForm from './TimeLogComponent';

var dataData = [
    {
        Name: "123",
        Date: "123",
        Time: "123",
        Activity: "123",
        Delete: null
    }
];

export class App extends Component {
    constructor(props) {
        super(props);
        this.state = {dataForTable: dataData};

        this.handleDataFromInputChange = this.handleDataFromInputChange.bind(this);
    }

    handleDataFromInputChange(data, event) {
        this.setState({dataForTable: this.state.dataForTable.concat(data)});
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <TimeLogForm onDataFromInputChanged={this.handleDataFromInputChange} />
                <DataTable data={this.state.dataForTable} />
            </div>
        );
    }
}

export default App;
