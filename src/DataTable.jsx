import React, { Component } from 'react';

const Row = props => {
    return (
        <tr>
            <td>{props.column.Name}</td>
            <td>{props.column.Date}</td>
            <td>{props.column.Time}</td>
            <td>{props.column.Activity}</td>
            <td>{props.column.Delete == null ? "Удалить" : props.column.Delete }</td>
        </tr>
    );
};

export class DataTable extends Component {
    render() {
        return (
            <table>
                <thead>
                <tr>
                    {Object.keys(this.props.data[0]).map(header => (
                        <th>{header}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {this.props.data.map(row => (<Row column={row} />))}
                </tbody>
            </table>
        );
    }
}


export default DataTable;
