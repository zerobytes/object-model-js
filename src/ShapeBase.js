const objectFill = require('./_functions').objectFill;

/**
 * Can have a simpler object filled by a "data" object, by means of $fill method
 */
class ShapeBase {
	constructor() {
		/**
		 * Applies an object filling based on passed data
		 *
		 * @param {object} data object contaning the default properties of this model, and its values
		 */
		this.$fill = (data) => {
			return objectFill(this, data);
		};
	}
}

/**
 * Field configuration set
 * Accessible from instance of ShapeBase
 */
ShapeBase.prototype.$fieldConfig = {};

exports.default = ShapeBase;
