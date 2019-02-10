'use strict'

const Scorecard = require('bowling-challenge/scorecard.js')

let scorecard;

beforeAll(() => {
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
});

describe('#finalScore', () => {
  test('calculates score for whole game', () => {
    for (let i = 0; i <= 20; i++) {
      scorecard.inputRoll(1);
    }
    expect(scorecard.finalScore).toEqual(20);
  });
});
