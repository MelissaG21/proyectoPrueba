let connectionPool = require('../bin/bd_config').connectionPool;

exports.getInfo = (type) => {
    let statment = 'select * from users'
    return connectionPool.query(statment);
}

exports.create = (data) => {
    let statment = 'insert into users (id, name, email) value (DEFAULT,?,?) '
    return connectionPool.query(statment,[data.name,data.email]);
}

/*exports.modificar = (data) => {
    let statment = 'insert into users (id, name, email) value (DEFAULT,?,?) '
    return connectionPool.query(statment,[data.name,data.email]);
}*/
/*
exports.eliminar = (id) => {
    let statment = 'DELETE FROM users WHERE id= ? ;'
    return connectionPool.query(statment,[data.id]);
}
*/