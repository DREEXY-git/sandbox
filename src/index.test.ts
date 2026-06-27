import { describe, expect, it } from 'vitest';
import { greet, sum } from './index';

describe('greet', () => {
  it('名前を付けて挨拶する', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});

describe('sum', () => {
  it('2数を加算する', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
