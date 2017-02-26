# not written by Peter
 
defp execute(instructions, line_num, env) do
  if line_num >= Enum.count(instructions) do
    env
  else
    {line_num, env} = execute_line(instructions[line_num], line_num, env)

    execute(instructions, line_num, env)
  end
end

defp execute_line(["cpy", from, to], line_num, env) do
  env = Map.put(env, to, expand(from, env))

  {line_num + 1, env}
end

# etc