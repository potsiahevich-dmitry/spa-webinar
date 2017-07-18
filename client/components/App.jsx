import React from 'react';

import CostsStore from '../stores/CostsStore';
import CostsActions from '../actions/CostsActions';

import CostEditor from './CostEditor.jsx';
import CostsGrid from './CostsGrid.jsx';

import './App.less';

function getStateFromFlux() {
    return {
        isLoading: CostsStore.isLoading(),
        costs: CostsStore.getCosts()
    };
}

const App = React.createClass({
    getInitialState() {
        return getStateFromFlux();
    },

    componentWillMount() {
        CostsActions.loadCosts();
    },

    componentDidMount() {
        CostsStore.addChangeListener(this._onChange);
    },

    componentWillUnmount() {
        CostsStore.removeChangeListener(this._onChange);
    },

    handleCostDelete(cost) {
        CostsActions.deleteCost(cost.id);
    },

    handleCostToggle(cost) {
        CostsActions.toggleCost(cost.id, !cost.payed);
    },

    handleCostAdd(costData) {
        CostsActions.createCost(costData);
    },

    render() {
        return (
            <div className='App'>
                <h2 className='App__header'>Wedding TOTAL: <b>{this.state.costs.reduce((total, cost) => total + cost.cost, 0)}</b></h2>
                <CostEditor onCostAdd={this.handleCostAdd} />
                <CostsGrid costs={this.state.costs.filter(({payer}) => payer === 'D')} payer="D" onCostDelete={this.handleCostDelete} onCostToggle={this.handleCostToggle} />
                <CostsGrid costs={this.state.costs.filter(({payer}) => payer === 'O')} payer="O" onCostDelete={this.handleCostDelete} onCostToggle={this.handleCostToggle} />
                <CostsGrid costs={this.state.costs.filter(({payer}) => payer === 'L')} payer="L" onCostDelete={this.handleCostDelete} onCostToggle={this.handleCostToggle} />
            </div>
        );
    },

    _onChange() {
        this.setState(getStateFromFlux());
    }
});

export default App;
