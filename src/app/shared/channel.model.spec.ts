/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import {ChannelModel} from './channel.model';

describe('Channel', () => {
  it('should create an instance', () => {
    expect(new ChannelModel()).toBeTruthy();
  });
});
