const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

//const db = require('../data/context');

const app = express();
const apiPort = process.env.PORT | 4600;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'src')));

//db.on('error', console.error.bind(console, 'Database connection error:'));

app.get('*', (req, res) =>{
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

app.use(express.json({
    type: ['application/json', 'text/plain']
}));

//mapRoutes(['card', 'seed', 'crate', 'crop', 'user', 'card-inventory']);

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));

// function mapRoutes(routes) {
//     const router = require('./routes/main-router');

//     routes.reduce(function(acc, model) {
//         app.use('/api', router(model));
//     }, 0);
// }
