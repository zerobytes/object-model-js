import md5 from 'md5';

/**
 * Will generate a salt by the maximum of the length specified.
 * Originally 8 bytes long.
 *
 * @param {number} [length] Optional. The final length of the generated salt
 *
 * @returns {string} randomly generated salt
 */
function generateSalt(length = 8) {
	var result = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~{}[];:!$%&()*%#@';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

/**
 * Converts a string to Base64
 *
 * @param {string} text The string to convert
 * @param {number} length The max length of the final base64
 *
 * @returns {string} base64 hashed string
 */
function toBase64(text, length = undefined) {
	return Buffer.from(text).toString('base64', 0, length);
}

/**
 * Makes an MD5 hash from a given string
 *
 * @param {string} text To be converted onto md5 hash
 *
 * @returns {string} a common md5 lowerCase string
 */
function md5Hash(text) {
	return md5(text);
}

module.exports = { generateSalt, md5Hash, toBase64 };
