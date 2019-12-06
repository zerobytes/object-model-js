const ShapeBase = require('../ShapeBase').default;
const FT = require('../FieldTypes');
const FieldTypes = FT.default;
const validator = require('../Validator').default;

/**
 * @type LocationAddress
 * @property {FieldTypes.String} line1
 * @property {FieldTypes.String} line2
 * @property {FieldTypes.String} postalCode
 * @property {FieldTypes.String} city
 * @property {FieldTypes.String} country
 */
class LocationAddress extends ShapeBase {
	constructor() {
		super();
		this.line1 = '';
		this.line2 = '';
		this.postalCode = '';
		this.city = '';
		this.country = '';
		this.$fieldConfig = {
			line1: {
				type: FieldTypes.String,
				minLength: 2,
				validate: () =>
					validator(this, 'line1')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			line2: {
				type: FieldTypes.String,
				validate: () => true
			},
			postalCode: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'postalCode')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			city: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'city')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			},
			country: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'country')
						.isOfType()
						.minLength()
						.notEmpty()
						.notNull()
						.isValid()
			}
		};
	}
}

module.exports = LocationAddress;
