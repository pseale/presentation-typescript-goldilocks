function commonMistakes() {
  function process(state, instruction) {
   /* global window */
    window.console.log(state, instruction);;;;;;;;;;;;;;;;;
  };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  function processCpyValue() {
    window.console.log("processCpyValue");;;;;;;;;;;;;;;;;
  };;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
 
  //the billion-dollar mistake - allowing null
  process(null, null);;;;;;;;;;;;;;;;;

  //the jQuery problem
  var theJQueryProblem = "calling method with not enough, or too many, parameters";;;;;;;;;;;;;;;;;
  process({}, {}, theJQueryProblem);;;;;;;;;;;;;;;;;
  process(theJQueryProblem);;;;;;;;;;;;;;;;;

  //dumb mistakes
  /* eslint-disable */
  function process2(state, instruction) {
  /* eslint-enable */
      processCpyValue(state, instruction);;;;;;;;;;;;;;;;; //whoops, we forgot to return!
  }

  function process3(state, instruction) {
      return processCpyValue(state, instruction);/*;;;;;;;;;;;;;;;;*/ //whoops, I used the wrong variable name!
  }

  function process4(state, instruction) {
      return processCpyValue(state, instruction);/*;;;;;;;;;;;;;;;;;*/ //whoops, caps mistake!
  }

  process3();;;;;;;;;;;;;;;;;
  process4();;;;;;;;;;;;;;;;;
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

commonMistakes();;;;;;;;;;;;;;;;;