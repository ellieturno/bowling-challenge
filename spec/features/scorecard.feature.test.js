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

  test('player rolls are divided into frames', () => {
    scorecard.inputRoll(1);
    scorecard.inputRoll(2);
    scorecard.inputRoll(3);
    scorecard.inputRoll(4);
    expect(scorecard.game).toEqual([[1,2],[3,4]]);
  })

  test('player rolls a spare and gets a bonus', () => {
    scorecard.inputRoll(8);
    scorecard.inputRoll(2);
    scorecard.inputRoll(3);
    scorecard.inputRoll(1);
    expect(scorecard.finalScore()).toEqual(17);
  });
});
