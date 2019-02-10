'use strict'

const Scorecard = require('bowling-challenge/scorecard.js')

let scorecard;

beforeEach(() => {
  scorecard = new Scorecard();
});

describe('#game', () => {
  test('starts with an empty game', () => {
    expect(scorecard.game).toEqual([]);
  });
});

describe('#roll', () => {
  test('stores the score in the scorecard', () => {
    scorecard.inputRoll(6)
    expect(scorecard.game).toEqual([6]);
  });

  test('stores rolls in frames', () => {
    scorecard.inputRoll(1)
    scorecard.inputRoll(2)
    expect(scorecard.game).toEqual([1,2]);
  });
});

describe('#finalScore', () => {
  test('calculates score for whole game', () => {
    for (let i = 0; i < 20; i++) {
      scorecard.inputRoll(1);
    }
    expect(scorecard.finalScore()).toEqual(20);
  });
});
