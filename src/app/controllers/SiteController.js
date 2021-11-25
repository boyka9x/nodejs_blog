
class NewController {

    // [GET] /
    index(req, res, next) {
        res.render('home');
    }

    // [GET] /search
    search(req, res, next) {
        res.render('search');
    }
}

module.exports = new NewController;