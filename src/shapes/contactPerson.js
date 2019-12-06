const ShapeBase = require('../ShapeBase').default;
const FT = require('../FieldTypes');
const FieldTypes = FT.default;
const validator = require('../Validator').default;

/**
 * @type ContactPerson
 * @property {FieldTypes.String} name
 * @property {FieldTypes.String} phoneNumber
 * @property {FieldTypes.String} email
 * @property {FieldTypes.String} address
 * @property {FieldTypes.String} website
 */
class ContactPerson extends ShapeBase {
	constructor() {
		super();
		this.name = '';
		this.phoneNumber = '';
		this.email = '';
		this.address = '';
		this.website = '';
		this.$fieldConfig = {
			name: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'name')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			phoneNumber: {
				type: FieldTypes.String,
				minLength: 8,
				validate: () =>
					validator(this, 'phoneNumber')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			email: {
				type: FieldTypes.String,
				minLength: 10,
				validate: () =>
					validator(this, 'email')
						.isOfType()
						.minLength()
						.email()
						.notEmpty()
						.notNull()
						.isValid()
			},
			address: {
				type: FieldTypes.String,
				minLength: 10,
				validate: () =>
					validator(this, 'address')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			website: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'website')
						.isOfType()
						.website()
						.isValid()
			}
		};
	}
}

module.exports = ContactPerson;
