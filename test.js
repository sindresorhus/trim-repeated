import test from 'ava';
import trimRepeated from './index.js';

test('main', t => {
	t.is(trimRepeated('foo--bar---baz', '-'), 'foo-bar-baz');
	t.is(trimRepeated('foo\\\\bar', '\\'), 'foo\\bar');
	t.is(trimRepeated('foo))bar', ')'), 'foo)bar');
	t.is(trimRepeated('foo🐴🐴bar', '🐴'), 'foo🐴bar');
	t.is(trimRepeated('foo@#@#bar', '@#'), 'foo@#bar');
	t.is(trimRepeated('foo#@#@bar', '@#'), 'foo#@#@bar');
});
