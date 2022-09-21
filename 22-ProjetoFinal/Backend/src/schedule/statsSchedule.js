const schedule = require('node-schedule')

module.exports = app => {
    schedule.scheduleJob('*/1 * * * *', async function() {
        const activeUsersCount = await app.db('users').whereNull('deletedAt').count('id').first()
        const totalUsersCount = await app.db('users').count('id').first()
        const categoriesCount = await app.db('categories').count('id').first()
        const articlesCount = await app.db('articles').count('id').first()

        const { Stat } = app.src.api.stat

        const lastStat = await Stat.findOne({}, {}, 
            { sort: {'createdAt': -1 } })

        const stat = new Stat({
            activeUsers: activeUsersCount.count,
            totalUsers: totalUsersCount.count,
            categories: categoriesCount.count,
            articles: articlesCount.count,
            createdAt: new Date()
        })

        const changeUsers = !lastStat || stat.activeUsers !== lastStat.activeUsers
        const changeCategories = !lastStat || stat.categories !== lastStat.categories
        const changeArticles = !lastStat || stat.articles !== lastStat.articles

        if(changeUsers || changeCategories || changeArticles) {
            stat.save().then(() => console.log('[Stats] Estatísticas atualizadas!!'))
        }
    })
}