
class NewController {

    // [GET] /news
    index(req, res, next) {

    }

    // [GET] /news/:slug
    show(req, res, next) {
        res.send("Hello!");
    }
}

module.exports = new NewController;