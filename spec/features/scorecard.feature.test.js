'use strict'

const Scorecard = require('bowling-challenge/scorecard.js')

describe('Scorecard', () => {

  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  test('player rolls 20 gutter balls', () => {
    expect(scorecard.finalScore).toEqual(0);
  });
});
