import React from 'react';

import ColorPicker from './ColorPicker.jsx';

import './CostEditor.less';

const CostEditor = React.createClass({
    getInitialState() {
        return {
            title: '',
            cost: '',
            payer: 'D'
        };
    },

    handleTextChange(event) {
        this.setState({ cost: event.target.value });
    },

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    },

    handleColorChange(payer) {
        this.setState({ payer });
    },

    handleCostAdd() {
        const newCost = {
            title: this.state.title,
            cost: this.state.cost,
            payer: this.state.payer,
            payed: false
        };

        this.props.onCostAdd(newCost);
        this.setState({ cost: '', title: '', payer: 'D' });
    },

    render() {
        return (
            <div className='CostEditor'>
                <input
                    type='text'
                    className='CostEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <input
                    placeholder='Enter cost'
                    type="number"
                    className='CostEditor__text'
                    value={this.state.cost}
                    onChange={this.handleTextChange}
                />
                <div className='CostEditor__footer'>
                    <ColorPicker
                        value={this.state.payer}
                        onChange={this.handleColorChange}
                    />
                    <button
                        className='CostEditor__button'
                        disabled={!this.state.cost || !this.state.title}
                        onClick={this.handleCostAdd}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
});

export default CostEditor;
