import axios from 'axios';

import { apiPrefix } from '../../etc/config.json';

export default {
    listCosts() {
        return axios.get(`${apiPrefix}/costs`);
    },

    createCost(data) {
        return axios.post(`${apiPrefix}/costs`, data);
    },

    deleteCost(costId) {
        return axios.delete(`${apiPrefix}/costs/${costId}`);
    },

    toggleCost(costId, payed) {
        return axios.post(`${apiPrefix}/costs/${costId}`, { payed: payed });
    }
}
