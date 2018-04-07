
module.exports = function(app) {

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('Home.ejs');
    });
};
