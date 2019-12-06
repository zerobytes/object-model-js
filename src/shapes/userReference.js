const ShapeBase = require('../ShapeBase').default;
const FT = require('../FieldTypes');
const FieldTypes = FT.default;
const validator = require('../Validator').default;

/**
 * @type UserReference
 * @property {FieldTypes.String} uid
 * @property {FieldTypes.String} fullName
 * @property {FieldTypes.String} email
 */
class UserReference extends ShapeBase {
	constructor(properties = null) {
		super();
		this.uid = '';
		this.fullName = '';
		this.email = '';
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
			fullName: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'fullName')
						.notNull()
						.notEmpty()
						.minLength()
						.isValid()
			},
			email: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'email')
						.notNull()
						.notEmpty()
						.minLength()
						.email()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

module.exports = UserReference;
