'use strict';

const Scorecard = require('bowling-challenge/scorecard.js')

describe('Scorecard Features:', () => {

  let scorecard;

  beforeEach(() => {
    scorecard = new Scorecard();
  });

  test('player rolls 20 gutter balls', () => {
    for (let i = 0; i < 20; i++) {
      scorecard.inputRoll(0);
    }
    expect(scorecard.finalScore()).toEqual(0);
  });
});
