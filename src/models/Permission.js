const ModelBase = require('../ModelBase').default;
const FieldTypes = require('../FieldTypes').default;
const validator = require('../Validator').default;

/**
 * @type Permission
 * @property {string} title
 * @property {string} description
 * @property {string} route
 * @property {boolean} active
 * @property {string} createdBy
 * @property {date} creationDate
 */
class Permission extends ModelBase {
	constructor(properties = null) {
		super('permission');

		this.$fieldConfig = {
			title: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'title')
						.isOfType()
						.notNull()
						.notEmpty()
						.isValid()
			},
			description: {
				type: FieldTypes.String,
				validate: () => true
			},
			route: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'route')
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

exports.default = Permission;
