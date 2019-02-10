'use strict'

const Scorecard = require('bowling-challenge/scorecard.js')

describe('game', () => {

  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  test('starts with an empty game', () => {
    expect(scorecard.game).toEqual([]);
  });
});
