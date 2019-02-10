'use-strict';

class Scorecard {
  constructor(game = []) {
    this.game = game;
  };

  inputRoll(score) {
    this.game.push(score)
  };
};

module.exports = Scorecard
