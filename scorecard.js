'use-strict';

class Scorecard {
  constructor(game = []) {
    this.game = game;
  };

  inputRoll(score) {
    this.game.push(score)
  };

  finalScore() {
    return this.finalScore = this.game.reduce((total, rollScore) => {
    return total + rollScore;
    });
  };
};

module.exports = Scorecard
