'use-strict'

class Scorecard {
  constructor () {
    this.game = []
    this.frame = []
  };

  inputRoll (score) {
    this.frame.push(score)
    if (this.frame.length === 2) {
      this.game.push(this.frame)
      this.frame = []
      this.frameIndex += 1
    };
  };

  finalScore () {
    var total = 0
    this.game.forEach(function (frame) {
      total += frame.reduce((accumulator, rollScore) => {
        return accumulator + rollScore
      })
    })
    return total
  };

  isSpare () {
    return this.game[0][0] + this.game[0][1] === 10;
  };
};

module.exports = Scorecard
