'use-strict';

class Scorecard {
  constructor(game = [], frame = []) {
    this.game = game;
    this.frame = frame;
  };

  inputRoll(score) {
    this.frame.push(score)
    if (this.frame.length === 2) {
      this.game.push(this.frame)
      this.frame = []
    }
  };

  finalScore() {
    return this.finalScore = this.game.reduce((total, rollScore) => {
    return total + rollScore;
    });
  };
};

module.exports = Scorecard
