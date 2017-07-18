import React from 'react';
import cx from 'classnames';

import './ColorPicker.less';

const PAYERS = ['D', 'O', 'L'];
const COLORS = {D: '#FF8A80', O: '#CCFF90', L: '#80D8FF'};

const ColorPicker = React.createClass({
    render() {
        return (
            <div className='ColorPicker'>
                {
                    PAYERS.map(payer =>
                        <div
                            key={payer}
                            className={cx('ColorPicker__swatch', { selected: this.props.value === payer })}
                            style={{ backgroundColor: COLORS[payer] }}
                            onClick={this.props.onChange.bind(null, payer)}
                        >{payer}</div>
                    )
                }
            </div>
        );
    }
});

export default ColorPicker;
