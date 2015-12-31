import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('foo--bar---baz', '-'), 'foo-bar-baz');
	t.is(fn('foo\\\\bar', '\\'), 'foo\\bar');
	t.is(fn('foo))bar', ')'), 'foo)bar');
	t.is(fn('foo🐴🐴bar', '🐴'), 'foo🐴bar');
	t.is(fn('foo@#@#bar', '@#'), 'foo@#bar');
	t.is(fn('foo#@#@bar', '@#'), 'foo#@#@bar');
});
