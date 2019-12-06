const ModelBase = require('../ModelBase').default;
const FieldTypes = require('../FieldTypes').default;
const validator = require('../Validator').default;
const UserReference = require('../shapes').userReference;

/**
 * @type Campaign
 * @property {UserReference} userObject
 * @property {string} qrid
 * @property {string} title
 * @property {string} description
 * @property {number} targetValue
 * @property {number} balance
 * @property {string} createdBy
 * @property {date} creationDate
 */
class Campaign extends ModelBase {
	constructor(properties = null) {
		super('campaign');

		this.$fieldConfig = {
			userObject: {
				type: FieldTypes.ShapedAs(new UserReference()),
				validate: () =>
					validator(this, 'userObject')
						.isOfType()
						.isValid()
			},
			qrid: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'qrid')
						.isOfType()
						.notNull()
						.notEmpty()
						.isValid()
			},
			title: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'title')
						.isOfType()
						.notNull()
						.notEmpty()
						.minLength()
						.isValid()
			},
			description: {
				type: FieldTypes.String,
				minLength: 3,
				validate: () =>
					validator(this, 'description')
						.isOfType()
						.notNull()
						.notEmpty()
						.minLength()
						.isValid()
			},
			targetValue: {
				type: FieldTypes.Float,
				defaultValue: 0,
				validate: () =>
					validator(this, 'targetValue')
						.isOfType()
						.notNull()
						.notEmpty()
						.isValid()
			},
			balance: {
				type: FieldTypes.Float,
				defaultValue: 0,
				validate: () =>
					validator(this, 'balance')
						.isOfType()
						.notNull()
						.notEmpty()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

exports.default = Campaign;
