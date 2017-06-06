'use strict'

const charlieCard = {
  monthlyValue: true
}

const charlieTicket = {
  value: 0.00
}

const SubwayGate = function () {
  this.state = 'closed'
}

SubwayGate.prototype.insertTicket = function () {
  if (this.state === 'closed') {
    if (charlieTicket.value >= 2.25) {
      this.state = 'open'
      charlieTicket.value -= 2.25
      return true
    } else {
      return false
    }
  }
}

SubwayGate.prototype.tapCard = function () {
  if (charlieCard.monthlyValue === true) {
    this.state = 'open'
    return true
  } else {
    return false
  }
}

SubwayGate.prototype.walkThrough = function () {
  if (this.state === 'open') {
    this.state = 'closed'
    return true
  } else {
    return false
  }
}

SubwayGate.prototype.exit = function () {
  this.state = 'open'
}

module.exports = {
  SubwayGate
}
