const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

//Static file
app.use(express.static(path.join(__dirname, 'public')));
console.log(path.join(__dirname, 'public'));

//middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
//HTTP Logger
// app.use(morgan('combined'));

//Template Engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, './resources/views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
