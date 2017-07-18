import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CostSchema = new Schema({
    title     : { type: String },
    cost      : { type: Number },
    payer     : { type: String },
    payed     : { type: Boolean},
    createdAt : { type: Date }
});

mongoose.model('Cost', CostSchema);
