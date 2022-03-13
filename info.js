import React from 'react';

class info extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="information">
                <ul>
                    <li>{this.props.person.name}</li>
                    <li>{this.props.person.dateOfBirth}</li>
                    <li>{this.props.person.number}</li>
                </ul>
            </div>
        );
    }
}

export default info;
