type Instruction = CpyRegister|CpyValue

function process(state: State, instruction: Instruction): State {
  if (instruction instanceof CpyValue) {
    return processCpyValue(state, instruction)
  } else if (instruction instanceof CpyRegister) {
    return processCpyRegister(state, instruction)
  } else {
    throw `Error: couldn't process instruction ${instruction} - type '${typeof(instruction)}'`
  }
}




export class CpyRegister {
  private _source: Register
  private _destination: Register

  get source(): Register { return this._source }
  get destination(): Register { return this._destination }

  public constructor(source: Register, destination: Register) {
    this._source = source
    this._destination = destination
  }
}

export class CpyValue {
  private _value: number
  private _destination: Register

  get value(): number { return this._value }
  get destination(): Register { return this._destination }

  public constructor(value: number, destination: Register) {
    this._value = value
    this._destination = destination
  }
}


function processCpyValue(state: State, cpyValue: CpyValue): State {
  const registerNewState = {
    register: cpyValue.destination,
    value: cpyValue.value
  }

  return {
    location: state.location + 1,
    registers: replace(state.registers, registerNewState)
  }
}

function processCpyRegister(state: State, cpyRegister: CpyRegister): State {
  const copyFrom = state.registers.filter(x => x.register === cpyRegister.source)[0]
  const registerNewState = {
    register: cpyRegister.destination,
    value: copyFrom.value
  }

  return {
    location: state.location + 1,
    registers: replace(state.registers, registerNewState)
  }
}

function parseCpy(tokens: string[]): CpyRegister|CpyValue {
  const destination = Register[tokens[2]]
  const value = Number(tokens[1])
  if (!isNaN(value)) {
    return new CpyValue(value, destination)
  } else {
    return new CpyRegister(Register[tokens[1]], destination)
  }
}

function replace(registers: Registers, registerState: RegisterState): Registers {
  const others = registers.filter(x => x.register !== registerState.register)
  return others.concat(registerState)
}


export enum Register {
  a,
  b,
  c,
  d
}

export interface RegisterState {
  register: Register,
  value: number
}

type Registers = RegisterState[]

interface State {
  location: number,
  registers: Registers
}
