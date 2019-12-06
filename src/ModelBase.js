const BasicService = require('@zerobytes/firebase-basic-service').BasicService;
const objectFill = require('./_functions').objectFill;

/**
 * Holds a standard functional object which can be validated automatically
 */
class ModelBase {
	/**
	 *
	 * @param {string} modelName collection at firestore
	 */
	constructor(modelName) {
		const _modelName = modelName;

		this.getModelName = () => _modelName;

		/**
		 * Applies an object filling based on passed data
		 *
		 * @param {object} data object contaning the default properties of this model, and its values
		 */
		this.$fill = function(data) {
			return objectFill(this, data);
			//FIXME: remove trash from here below
			// 	data = data instanceof Object ? data : {};
			// 	if(data.uid){
			// 		this.uid = data.uid
			// 	}
			// 	if(data.createdAt){
			// 		this.createdAt = data.createdAt
			// 	}
			// 	if(data.createdBy){
			// 		this.createdBy = data.createdBy
			// 	}
			// 	//Creates all the public properties for this object
			// 	//based on the $fieldConfig
			// 	Object.keys(this.$fieldConfig).map((property) => {
			// 		let field = this.$fieldConfig[property];
			// 		this[property] = data[property]
			// 			? data[property]
			// 			: field.defaultValue || '';
			// 	});
		};
	}
}

/**
 *
 */
ModelBase.prototype.$fieldConfig = {};
/**
 * Returns an instance of BasicService which gives access to several methods
 * regarding firebase.firestore actions.
 * save/patch/get/list/filter/order/limit
 */
ModelBase.prototype.getService = function(firebase, store, reducerName) {
	let defaultObject = {};
	Object.keys(this.$fieldConfig).map((property) => {
		let field = this.$fieldConfig[property];
		defaultObject[property] = field.defaultValue || '';
	});

	return BasicService({
		firebase,
		collection: this.getModelName(),
		defaultObject,
		store,
		reducerName: reducerName || this.getModelName()
	});
};
/**
 * Validates each field of this model, according to their own validation method
 */
ModelBase.prototype.validate = function() {
	let errors = {};
	Object.keys(this.$fieldConfig).find((property) => {
		let field = this.$fieldConfig[property];
		let validation = field.validate();
		if (validation.length) {
			errors[property] = validation;
		}
	});
	return errors;
};

exports.default = ModelBase;
