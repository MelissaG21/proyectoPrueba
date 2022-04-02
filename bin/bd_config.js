let  createPool = require('promise-mysql').createPool;

const mysqlPool = createPool({
    host: 'localhost',
    user: 'admin',
    //password: 'FundableD0ubles!',
    password: 'Melissa#2',
    database: 'curso',
    connectionLimit: 5000
});

module.exports = {
    connectionPool: mysqlPool
};
