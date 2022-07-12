class NewsControllers {
    //[GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news/:slug
    tintuc(req, res) {
        res.send('NEW DETAIL!!!');
    }
}

module.exports = new NewsControllers;