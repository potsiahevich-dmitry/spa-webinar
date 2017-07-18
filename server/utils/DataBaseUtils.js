import mongoose from "mongoose";

import config from '../../etc/config.json';

import '../models/Cost';

const Cost = mongoose.model('Cost');

export function setUpConnection() {
    mongoose.connect(`mongodb://${config.db.user}:${config.db.pass}@${config.db.host}:${config.db.port}/${config.db.name}`);
}

export function listCosts(id) {
    return Cost.find();
}

export function createCost(data) {
    const cost = new Cost({
        title: data.title,
        cost: data.cost,
        payer: data.payer,
        payed: data.payed,
        createdAt: new Date()
    });

    return cost.save();
}

export function deleteCost(id) {
    return Cost.findById(id).remove();
}

export function toggleCost(id, data) {
    return Cost.findById(id).update({payed: data.payed});
}
