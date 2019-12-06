const ShapeBase = require('../ShapeBase').default;
const FT = require('../FieldTypes');
const FieldTypes = FT.default;
const validator = require('../Validator').default;

/**
 * @type PermissionReference
 * @property {FieldTypes.String} uid
 * @property {FieldTypes.Boolean} active
 */
class PermissionReference extends ShapeBase {
	constructor(properties = null) {
		super();
		this.uid = '';
		this.active = true;
		this.$fieldConfig = {
			uid: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'uid')
						.isOfType()
						.notNull()
						.notEmpty()
						.isValid()
			},
			active: {
				type: FieldTypes.Boolean,
				defaultValue: true,
				validate: () =>
					validator(this, 'active')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

module.exports = PermissionReference;
