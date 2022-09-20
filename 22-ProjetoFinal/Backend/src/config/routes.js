module.exports = app => {

    app.post('/signup', app.src.api.user.save)
    app.post('/signin', app.src.api.auth.signin)
    app.post('/validateToken', app.src.api.auth.validateToken)

    app.route('/users')
        .all(app.src.config.passport.authenticate())
        .post(app.src.api.user.save)
        .get(app.src.api.user.get)

    app.route('/users/:id')
        .all(app.src.config.passport.authenticate())
        .put(app.src.api.user.save)
        .get(app.src.api.user.getById)

    app.route('/categories')
        .all(app.src.config.passport.authenticate())
        .get(app.src.api.category.get)
        .post(app.src.api.category.save)

    // Cuidado com ordem! Tem que vir antes de '/categories/:id'
    app.route('/categories/tree')
        .all(app.src.config.passport.authenticate())
        .get(app.src.api.category.getTree)

    app.route('/categories/:id')
        .all(app.src.config.passport.authenticate())
        .get(app.src.api.category.getById)
        .put(app.src.api.category.save)
        .delete(app.src.api.category.remove)

    app.route('/articles')
        .all(app.src.config.passport.authenticate())
        .get(app.src.api.article.get)
        .post(app.src.api.article.save)

    app.route('/articles/:id')
        .all(app.src.config.passport.authenticate())
        .get(app.src.api.article.getById)
        .put(app.src.api.article.save)
        .delete(app.src.api.article.remove)

    app.route('/categories/:id/articles')
        .all(app.src.config.passport.authenticate())
        .get(app.src.api.article.getByCategory)
}