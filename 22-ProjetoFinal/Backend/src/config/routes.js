module.exports = app => {

    app.post('/signup', app.src.api.user.save)
    app.post('/signin', app.src.api.auth.signin)
    app.post('/validateToken', app.src.api.auth.validateToken)

    app.route('/users')
        .post(app.src.api.user.save)
        .get(app.src.api.user.get)

    app.route('/users/:id')
        .put(app.src.api.user.save)
        .get(app.src.api.user.getById)

    app.route('/categories')
        .get(app.src.api.category.get)
        .post(app.src.api.category.save)

    // Cuidado com ordem! Tem que vir antes de '/categories/:id'
    app.route('/categories/tree')
        .get(app.src.api.category.getTree)

    app.route('/categories/:id')
        .get(app.src.api.category.getById)
        .put(app.src.api.category.save)
        .delete(app.src.api.category.remove)

    app.route('/articles')
        .get(app.src.api.article.get)
        .post(app.src.api.article.save)

    app.route('/articles/:id')
        .get(app.src.api.article.getById)
        .put(app.src.api.article.save)
        .delete(app.src.api.article.remove)

    app.route('/categories/:id/articles')
        .get(app.src.api.article.getByCategory)
}