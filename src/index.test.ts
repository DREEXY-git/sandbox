import { describe, expect, it } from 'vitest';
import { greet } from './index';

describe('greet', () => {
  it('名前を付けて挨拶する', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
