const data = (Model) => {
    const getAll = () => {
        return Model.find().exec();
    };

    const getById = (id) => {
        return Model.findById(id).exec();
    };

    const create = (obj) => {
        Model.create(obj);
    };

    const update = (id, query) => {
        return Model.findByIdAndUpdate(id, query).exec();
    };

    const remove = (id) => {
        return Model.findByIdAndRemove(id).exec();
    };


    return {
        getAll,
        getById,
        create,
        update,
        remove,
    };
};

module.exports = data;
