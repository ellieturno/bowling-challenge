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

describe('#inputRoll', () => {
  test('stores rolls in frames', () => {
    scorecard.inputRoll(1)
    scorecard.inputRoll(2)
    expect(scorecard.game).toEqual([[1,2]]);
  });
});

describe('#finalScore', () => {
  test('calculates score for whole game', () => {
    for (let i = 0; i < 21; i++) {
      scorecard.inputRoll(1);
    }
    expect(scorecard.finalScore()).toEqual(20);
  });
});

describe('#isSpare', () => {
  test('checks whether a frame is a spare', () => {
    scorecard.inputRoll(8)
    scorecard.inputRoll(2)
    expect(scorecard.isSpare()).toBe(true);
  });
});
