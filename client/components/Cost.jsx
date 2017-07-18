import React from 'react';

import './Cost.less';

const Cost = React.createClass({

    render() {
        const style = {
            backgroundColor: this.props.payed ? "green" : "white",
            opacity: this.props.payed ? "0.8" : "1"
        };

        return (
            <div className='Cost' style={style}>
                <span className='Cost__del-icon' onClick={this.props.onDelete}> × </span>
                <div className='Cost__title'>{this.props.title}</div>
                <div className='Cost__cost'>{this.props.cost}</div>
                <label className='Cost__payed'>
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.props.payed}
                        onChange={this.props.onToggle} />
                </label>
            </div>
        );
    }
});

export default Cost;
