// importing
const Users = require('./Users')
const portfolio = require('./Portfolio')

// Export all objects
module.exports = {
    users: new Users(),
    portfolio:new portfolio()
}