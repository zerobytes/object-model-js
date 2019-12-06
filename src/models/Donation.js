const ModelBase = require('../ModelBase').default;
const FieldTypes = require('../FieldTypes').default;
const validator = require('../Validator').default;
const UserReference = require('../shapes').userReference;

/**
 * @type Donation
 * @property {User} receiverObject
 * @property {User} donorObject
 * @property {string} campaign
 * @property {string} value
 * @property {string} donatedAt
 * @property {string} message
 * @property {string} createdBy
 * @property {date} creationDate
 */
class Donation extends ModelBase {
	constructor(properties = null) {
		super('donation');

		this.$fieldConfig = {
			receiverObject: {
				type: FieldTypes.ShapedAs(new UserReference()),
				validate: () =>
					validator(this, 'receiverObject')
						.isOfType()
						.isValid()
			},
			donorObject: {
				type: FieldTypes.ShapedAs(new UserReference()),
				validate: () =>
					validator(this, 'donorObject')
						.isOfType()
						.isValid()
			},
			campaign: {
				type: FieldTypes.String,
				validate: () => true
			},
			value: {
				type: FieldTypes.Float,
				defaultValue: 0,
				validate: () =>
					validator(this, 'value')
						.isOfType()
						.notEmpty()
						.notNull()
						.moreThanZero()
						.isValid()
			},
			donatedAt: {
				type: FieldTypes.Datetime,
				defaultValue: new Date().getTime(),
				validate: () =>
					validator(this, 'donatedAt')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			message: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'message')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

exports.default = Donation;
