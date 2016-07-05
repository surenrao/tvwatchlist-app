/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { MockDataService} from './mock-data.service';

describe('DataService Service', () => {
  beforeEachProviders(() => [MockDataService]);

  it('should ...',
      inject([MockDataService], (service: MockDataService) => {
    expect(service).toBeTruthy();
  }));
});
