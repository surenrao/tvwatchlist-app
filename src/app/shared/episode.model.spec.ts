/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {EpisodeModel} from './episode.model';

describe('Episode', () => {
  it('should create an instance', () => {
    expect(new EpisodeModel()).toBeTruthy();
  });
});
