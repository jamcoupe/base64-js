(function (deps, factory) {
	if (typeof module === 'object' && typeof module.exports === 'object') {
		var v = factory(require, exports); if (v !== undefined) module.exports = v;
	}
	else if (typeof define === 'function' && define.amd) {
		define(deps, factory);
	}
})(["require", "exports", "./lib/b64"], function (require, exports, b64) {
	exports.Base64 = {
		toByteArray: b64.toByteArray,
		fromByteArray: b64.fromByteArray
	}
});