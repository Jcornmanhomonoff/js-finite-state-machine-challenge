'use strict'

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')

chai.use(chaiAsPromised)

const expect = chai.expect
// const assert = chai.assert

const challenge = require('../lib/challenge')

describe('Finite State Machine', function () {
  const gate = new challenge.SubwayGate()

  it('has an initial state that is closed', function () {
    expect(gate.state).to.equal('closed')
  })

  it('has a tapCard method that transitions state to open if the Charlie Card has value', function () {
    expect(gate.tapCard()).to.equal(true)
    gate.tapCard()
    expect(gate.tapCard).to.be.a.function
    expect(gate.state).to.equal('open')
    gate.walkThrough()
  })

  it('has an insertTicket method that transitions state to open if the Charlie Ticket has a value greater or equal to 2.25', function () {
    expect(gate.insertTicket).to.be.a.function
    if (gate.insertTicket()) {
      expect(gate.state).to.equal('open')
    } else {
      expect(gate.state).to.equal('closed')
    }
    gate.walkThrough()
  })

  it('has a walkThrough method that transitions state to closed if state is currently open', function () {
    gate.tapCard()
    gate.walkThrough()
    expect(gate.walkThrough).to.be.a.function
    expect(gate.state).to.equal('closed')
  })

  it('has a walkThrough method that returns false if state is currently closed', function () {
    expect(gate.walkThrough()).to.equal(false)
  })

  it('has an exit method that transitions state to open', function () {
    gate.exit()
    expect(gate.exit).to.be.a.function
    expect(gate.state).to.equal('open')
  })
})
