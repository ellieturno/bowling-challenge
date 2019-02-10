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
    var total = 0
    this.game.forEach(function(frame) {
      total += frame.reduce((accumulator, rollScore) => {
        return accumulator + rollScore
      });
    });
    return total
  };
};

module.exports = Scorecard
