/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {CountryModel} from './country.model';

describe('Country', () => {
  it('should create an instance', () => {
    expect(new CountryModel()).toBeTruthy();
  });
});
