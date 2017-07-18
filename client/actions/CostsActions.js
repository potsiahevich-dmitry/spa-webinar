import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const CostActions = {
    loadCosts() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_COSTS_REQUEST
        });

        api.listCosts()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_COSTS_SUCCESS,
                costs: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_COSTS_FAIL,
                error: err
            })
        );
    },

    createCost(cost) {
        api.createCost(cost)
        .then(() =>
            this.loadCosts()
        )
        .catch(err =>
            console.error(err)
        );
    },

    deleteCost(costId) {
        api.deleteCost(costId)
        .then(() =>
            this.loadCosts()
        )
        .catch(err =>
            console.error(err)
        );
    },

    toggleCost(costId, payed) {
        api.toggleCost(costId, payed)
        .then((res) => {
            this.loadCosts()
        })
        .catch(err => {
            console.error(err)
        })
    }
};

export default CostActions;
