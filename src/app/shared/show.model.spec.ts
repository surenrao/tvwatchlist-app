/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {ShowModel} from './show.model';

describe('Show', () => {
  it('should create an instance', () => {
    expect(new ShowModel()).toBeTruthy();
  });
});
