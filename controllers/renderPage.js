exports.renderIndex = function (req, res) {
    res.render('index', {
        title: 'Index',
        messages: null
    });
};