let renderPage = require('../controllers/renderPage');

module.exports = function (app) {

    app.route('/index')
        .get(renderPage.renderIndex);

};