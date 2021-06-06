import { expect, test } from '@oclif/test';
import Today from '../../src/services/Today';

describe('Today', () => {
  test.it('Returns todays date', ctx => {
    const today = new Today();
    expect(today.date()).to.eq('2021/06/06');
  })
})
