// not written by Peter

  let rec loop idx = 
    if idx >= inputs.Length then registers
    else 
      match inputs.[idx] with
      | [| "cpy"; Int n; dest |] -> 
        registers.[dest] <- n
        loop (idx+1)
      | [| "cpy"; src; dest   |] -> 
        registers.[dest] <- registers.[src]
        loop (idx+1)
      | _ -> loop (idx+1)

  loop 0
