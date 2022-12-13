const { merge } = require('lodash')
const userResolvers = require('../user/user.resolver')
const siteResolvers = require('../src/sites/sites.resolver')

const resolver = merge(userResolvers, siteResolvers);

module.exports = resolver;