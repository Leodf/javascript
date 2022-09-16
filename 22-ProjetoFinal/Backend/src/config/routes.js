module.exports = app => {
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
}