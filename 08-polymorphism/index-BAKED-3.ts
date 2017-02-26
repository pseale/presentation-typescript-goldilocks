export type Register = "a"|"b"|"c"|"d"

interface Cpy {
  type: "cpy",
  value: number|Register,
  destination: Register
}

interface Inc {
  type: "inc",
  value: Register
}

interface Dec {
  type: "dec",
  value: Register
}

interface Jnz {
  type: "jnz",
  value: number|Register,
  destination: number
}

type Instruction = Cpy|Inc|Dec|Jnz

interface State {
  a: number,
  b: number,
  c: number,
  d: number,
  location: number
}

function getValue(state: State, value: number|Register): number {
  if(isRegisterValue(value)) {
    return state[value]
  }

  return value
}

function process(state: State, instruction: Instruction): State {
  if (isCpy(instruction)) {
    const value = getValue(state, instruction.value)
    return replace(state, instruction.destination, value)
  } else {
    throw "Not implemented"
  }
}

function replace(state: State, register: Register, value: number): State {
  let state2 = {
    a: state.a,
    b: state.b,
    c: state.c,
    d: state.d,
    location: state.location
  }

  state2[register] = value

  return state2
}

function isRegisterValue(value: number|Register): value is Register {
  return !(typeof(value) === "number")
}

function isCpy(instruction: Instruction): instruction is Cpy {
  return instruction.type === "cpy"
}
