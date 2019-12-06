/**
 * Will fill an object based on an instance info
 * and also the "data" object passed on
 *
 * @param {object} instance the object to be filled on
 * @param {object} data object from which data should come from
 */
exports.objectFill = (instance, data = null) => {
	data = data instanceof Object ? data : {};
	if (data.uid) {
		instance.uid = data.uid;
	}
	if (data.createdAt) {
		instance.createdAt = data.createdAt;
	}
	if (data.createdBy) {
		instance.createdBy = data.createdBy;
	}
	//Creates all the public properties for instance object
	//based on the $fieldConfig
	Object.keys(instance.$fieldConfig).map((property) => {
		let field = instance.$fieldConfig[property];
		instance[property] = data[property] ? data[property] : field.defaultValue || '';
	});

	return instance;
};
