// importing
const Users = require('./Users')
const Portfolio = require('./Portfolio')

// Export all objects
module.exports = {
    users: new Users(),
    portfolio: new Portfolio()
}