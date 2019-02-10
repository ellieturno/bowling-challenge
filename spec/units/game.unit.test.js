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
