const ModelBase = require('../ModelBase').default;
const User = require('./User').default;
const FieldTypes = require('../FieldTypes').default;

/**
 * @type Follower
 * @property {User} followerObject
 * @property {User} userObject
 * @property {string} createdBy
 * @property {date} creationDate
 */
class Follower extends ModelBase {
	constructor(properties = null) {
		super('follower');

		this.$fieldConfig = {
			followerObject: {
				type: FieldTypes.ShapedAs(new User()),
				validate: () => true
			},
			userObject: {
				type: FieldTypes.ShapedAs(new User()),
				validate: () => true
			}
		};

		this.$fill(properties);
	}
}

exports.default = Follower;
