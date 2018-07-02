let Novel = require('../controllers/novel');
module.exports = function (app) {
    app.route('/novel')
        .post(Novel.getNovelByType);
    app.route('/novel/type')
        .get(Novel.getNovelType);
};