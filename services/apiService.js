let apiModal = require('../modal/apiModal')

exports.getInfo = async(type) =>{
    var data = await apiModal.getInfo(type);

    return data
}
exports.create = async(data) =>{
    var data = await apiModal.create(data);

    return data
}

exports.eliminar = async(id) =>{
    var id = await apiModal.eliminar(id);

    return id
}