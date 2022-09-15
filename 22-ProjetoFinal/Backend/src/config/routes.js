module.exports = app => {
    app.route('/users')
        .post(app.src.api.user.save)
}