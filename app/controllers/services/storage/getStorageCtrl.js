// app/controllers/services/storage/getStorageCtrl.js
var db = require ('../../../models')

/** Avoid row queries, wait until view models are set up.
module.exports.Containers = function (req, res) {
    var query = db.sequelize.query("SELECT * FROM storage_containers", { type: db.sequelize.QueryTypes.SELECT});
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.Objects = function (req, res) {
    var query = db.sequelize.query("SELECT * FROM storage_objects", { type: db.sequelize.QueryTypes.SELECT});
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};
**/
module.exports.AWSContainers = function (req, res) {
    if (!req.params.container_id)
    {
	var query = db.aws_storage_containers.findAll({});
    } else {
	var query = db.aws_storage_containers.findAll({
	    where: {
		id: req.params.container_id
	    }
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.AWSContainersById = function (req, res) {
    if (!req.params.container_id)
    {
	var query = db.aws_storage_containers.findAll({});
    } else {
	var query = db.aws_storage_objects.findAll({
	    where: {
		container_id: req.params.container_id
	    }
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.AZRContainers = function (req, res) {
    if (!req.params.container_id)
    {
	var query = db.azr_storage_containers.findAll({});
    } else {
	var query = db.azr_storage_containers.findAll({
	    where: {
		id: req.params.container_id
	    }
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.AZRContainersById = function (req, res) {
    if (!req.params.container_id)
    {
	var query = db.azr_storage_containers.findAll({});
    } else {
	var query = db.azr_storage_objects.findAll({
	    where: { container_id: req.params.container_id }
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.AWSObjects = function (req, res) {
    if (!req.params.object_id)
    {
	var query = db.aws_storage_objects.findAll({});
    } else {
	var query = db.aws_storage_objects.findAll({
	    where: {
		id: req.params.object_id
	    }
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};

module.exports.AZRObjects = function (req, res) {
    if (!req.params.object_id)
    {
	var query = db.azr_storage_objects.findAll({});
    } else {
	var query = db.azr_storage_objects.findAll({
	    where: {
		id: req.params.object_id
	    }
	});
    }
    var results = query.then(function (value) {
	res.status(200).send(value);
    })
};
