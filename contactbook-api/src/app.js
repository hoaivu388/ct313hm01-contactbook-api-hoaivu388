const express = require('express');
const cors = require('cors');
const app = express();
const contactsRouter = require('./routes/contacts.router');
const jsend = require('./jsend');
const errorsController = require('./controller/errors.controller');
const {specs, swaggerUi} = require('./docs/swagger');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public',express.static('public'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.get('/', (req, res) => {
    res.json(jsend.success());
});

contactsRouter.setup(app);
app.use(errorsController.resourceNotFound);
app.use(errorsController.handleError);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;