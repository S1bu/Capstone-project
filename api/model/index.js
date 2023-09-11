// importing
const Users = require('./Users')
const Portfolio = require('./Portfolio')
const Favourites = require('./favourites')

// Export all objects
module.exports = {
    users: new Users(),
    portfolio: new Portfolio(),
    favourites: new Favourites()
}