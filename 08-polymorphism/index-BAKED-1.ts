interface State {};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

enum InstructionType
{
  CpyValue,
  CpyRegister,
  Inc,
  Dec,
  JnzValue,
  JnzRegister
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

interface Instruction {
  type: InstructionType,
  arg1: any,
  arg2: any
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

interface Instruction {
  process(state: State): State;/*;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;*/
};;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

















export default "need an export so this file isn't seen as global. Nothing to see here"
