const dbConst = require('../consts/db');

module.exports = {
    secret: process.env.PRO_SECRETKEY,
    connstr: `mongodb://a:a@ds249818.mlab.com:49818/${dbConst.dbName}`
}