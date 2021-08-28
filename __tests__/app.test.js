/**
 * @jest-environment jsdom
 */

import { createCeils } from '../src/js/helpers';

it('test 1', () => {
  expect(createCeils(3).length).toBe(3);
});
