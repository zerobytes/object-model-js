const ModelBase = require('../ModelBase').default;
const FieldTypes = require('../FieldTypes').default;
const validator = require('../Validator').default;
const shapes = require('../shapes');

/**
 * @type User
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} provider
 * @property {array<any>} addresses
 * @property {string} birthdate
 * @property {string} email
 * @property {string} phone
 * @property {string} phoneArea
 * @property {string} phoneCountry
 * @property {string} taxDocument
 * @property {number} followersCount
 * @property {number} followingCount
 * @property {number} postsCount
 * @property {string} bio
 * @property {number} temporaryBalance
 * @property {string} createdBy
 * @property {date} creationDate
 */
class User extends ModelBase {
	constructor(properties = null) {
		super('user');

		this.$fieldConfig = {
			firstName: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'firstName')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			lastName: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'lastName')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			provider: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'provider')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			addresses: {
				type: FieldTypes.ArrayOf(FieldTypes.ShapedAs(shapes.locationAddress)),
				validate: () =>
					validator(this, 'addresses')
						.isOfType()
						.notNull()
						.notEmpty()
						.isValid()
			},
			birthdate: {
				type: FieldTypes.Date,
				validate: () =>
					validator(this, 'provider')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			email: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'email')
						.isOfType()
						.notEmpty()
						.notNull()
						.email()
						.isValid()
			},
			phoneCountry: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'phoneCountry')
						.isOfType()
						.isValid()
			},
			phoneArea: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'phoneArea')
						.isOfType()
						.isValid()
			},
			phone: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'phone')
						.isOfType()
						.notEmpty()
						.notNull()
						.isValid()
			},
			taxDocument: {
				type: FieldTypes.String,
				validate: () =>
					validator(this, 'taxDocument')
						.isOfType()
						.isValid()
			},
			followersCount: {
				type: FieldTypes.Integer,
				validate: () =>
					validator(this, 'followersCount')
						.isOfType()
						.isValid()
			},
			followingCount: {
				type: FieldTypes.Integer,
				validate: () =>
					validator(this, 'followingCount')
						.isOfType()
						.isValid()
			},
			postsCount: {
				type: FieldTypes.Integer,
				validate: () =>
					validator(this, 'postsCount')
						.isOfType()
						.isValid()
			},
			bio: {
				type: FieldTypes.String,
				validate: () => true
			},
			temporaryBalance: {
				type: FieldTypes.Float,
				validate: () =>
					validator(this, 'temporaryBalance')
						.isOfType()
						.isValid()
			}
		};

		this.$fill(properties);
	}
}

exports.default = User;
