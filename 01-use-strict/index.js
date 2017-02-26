"use strict"

var foo = uninitializedVariableName

function commonMistakes() {
  //the billion-dollar mistake - allowing null
  processExample1(null, null)

  //the jQuery problem
  const theJQueryProblem = "a mistake I make often, specifically with jQuery"
  processExample2({}, {}, theJQueryProblem)
  processExample3(theJQueryProblem)

  //dumb mistakes
  function processExample4(state, instruction) {
    processCpyValue(state, instruction) 
  }

  function processExample5(state, instruction) {
    return processCpyValue(state, instr)
  }

  function processExample6(state, instruction) {
    return processCPYValue(state, instruction)
  }
}
