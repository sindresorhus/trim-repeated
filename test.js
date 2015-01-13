'use strict';
var test = require('ava');
var trimRepeated = require('./');

test(function (t) {
	t.assert(trimRepeated('foo--bar---baz', '-') === 'foo-bar-baz');
	t.assert(trimRepeated('foo\\\\bar', '\\') === 'foo\\bar');
	t.assert(trimRepeated('foo))bar', ')') === 'foo)bar');
	t.assert(trimRepeated('foo🐴🐴bar', '🐴') === 'foo🐴bar');
	t.assert(trimRepeated('foo@#@#bar', '@#') === 'foo@#bar');
	t.assert(trimRepeated('foo#@#@bar', '@#') === 'foo#@#@bar');
	t.end();
});
