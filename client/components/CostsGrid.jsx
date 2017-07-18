import React from 'react';
import Cost from './Cost.jsx';

import './CostsGrid.less';

const PAYER_NAMES = {
    D: 'Dima',
    O: 'Olya',
    L: 'Lucia'
}

const CostsGrid = React.createClass({

    render() {
        return (
            <div className="CostsGrid">
                <h3>{PAYER_NAMES[this.props.payer]}</h3>
                {
                    this.props.costs.map(cost =>
                        <Cost
                            key={cost.id}
                            title={cost.title}
                            cost={cost.cost}
                            payed={cost.payed}
                            onDelete={this.props.onCostDelete.bind(null, cost)}
                            onToggle={this.props.onCostToggle.bind(null, cost)}
                        />
                    )
                }
                <div>{PAYER_NAMES[this.props.payer]}'s total <b>{this.props.costs.reduce((total, cost) => total + cost.cost, 0)}</b> BYN</div>
            </div>
        );
    }
});

export default CostsGrid;
