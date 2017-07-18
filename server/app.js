import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import { serverPort } from '../etc/config.json';

import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
db.setUpConnection();

// Using bodyParser middleware
app.use( bodyParser.json() );

// Allow requests from any origin
app.use(cors({ origin: '*' }));

// RESTful api handlers
app.get('/costs', (req, res) => {
    db.listCosts().then(data => res.send(data));
});

app.post('/costs', (req, res) => {
    db.createCost(req.body).then(data => res.send(data));
});

app.post('/costs/:id', (req, res) => {
    db.toggleCost(req.params.id, req.body).then(data => res.send(data));
});

app.delete('/costs/:id', (req, res) => {
    db.deleteCost(req.params.id).then(data => res.send(data));
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
