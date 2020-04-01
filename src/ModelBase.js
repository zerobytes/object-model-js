import { BasicService } from '@zerobytes/firebase-basic-service';
import PlainObject from './PlainObject';
import FieldTypes from './FieldTypes';

/**
 * Holds a standard functional object which can be validated automatically
 */
class ModelBase extends PlainObject {
	/**
	 * @param {string} modelName collection at firestore
	 * @param {object} data Object containing the property values of this model
	 */
	constructor(modelName, data) {
		super(data);
		const _modelName = modelName;
		this.getModelName = () => _modelName;
	}
}

/**
 * Returns an instance of BasicService which gives access to several methods
 * regarding firebase.firestore actions.
 * save/patch/get/list/filter/order/limit
 *
 * @param {Firebase} firebase Instance
 * @param {Object} store custom redux store
 * @param {string} reducerName custom redux reducer
 * @param {string} collectionPrefix [optional] custom collection prefix. Useful for sub-collections
 */
ModelBase.prototype.getService = function(firebase, store, reducerName, collectionPrefix = '') {
	let defaultObject = {},
		collectionName;

	Object.keys(this.$fieldConfig).forEach((property) => {
		let field = this.$fieldConfig[property];
		switch (field.type) {
			case FieldTypes.Boolean:
				defaultObject[property] = field.defaultValue;
				break;
			case FieldTypes.Array:
			case FieldTypes.ArrayOf:
				defaultObject[property] = field.defaultValue || [];
				break;
			case FieldTypes.Object:
			case FieldTypes.ShapedAs:
			case FieldTypes.InstanceOf:
				defaultObject[property] = field.defaultValue || {};
				break;
			default:
				defaultObject[property] = field.defaultValue || '';
				break;
		}
	});

	//Determines reference to the collection
	collectionName =
		!collectionPrefix || collectionPrefix === ''
			? this.getModelName()
			: `${collectionPrefix}/${this.getModelName()}`;

	//Removing dupes of slash
	collectionName = collectionName.replace('//', '/');

	return BasicService({
		firebase,
		collection: collectionName,
		defaultObject,
		store,
		reducerName: reducerName || this.getModelName()
	});
};

export default ModelBase;
