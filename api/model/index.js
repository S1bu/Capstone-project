// importing
const Users = require('./Users')
const products = require('./Products')

// Export all objects
module.exports = {
    users: new Users(),
    products:new products()
}