
module.exports = function(app) {

    // show the home page (will also have our login links)
    app.get('/', function(req, res) {
        res.render('Home.ejs');
    });

    app.get('/aboutus', function(req, res) {
        res.render('aboutus.ejs');
    });

    app.get('/contact', function(req, res) {
        res.render('contact.ejs');
    });

    app.get('/music', function(req, res) {
        res.render('music.ejs');
    });

    app.get('/signup', function(req, res) {
        res.render('signup.ejs');
    });

    app.get('/login', function(req, res){
        res.render('login.ejs')
    });

};
