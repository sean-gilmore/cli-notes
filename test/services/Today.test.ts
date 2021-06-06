import { expect, test } from '@oclif/test';
import Today from '../../src/services/Today';

describe('Today', () => {
  test.it('Returns the formatted date', () => {
    const today = new Today('2021/06/06');
    expect(today.date()).to.eq('2021/06/06');
  });

  test.it('Returns the formatted time', () => {
    const today = new Today('2021/06/06 23:31');
    expect(today.time()).to.eq('23:31');
  });
});
