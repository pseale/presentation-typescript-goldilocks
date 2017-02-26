What am I seeing here?
======================

Hi, I'm Peter! (@pseale on twitter)

This is the public repository for my critically-acclaimed talk "TypeScript and Goldilocks and the Three Bears: And Also Math Professor Bear."

The two big ideas of the talk are: a) You should use TypeScript's types as much as possible, and b) TypeScript is getting *weird* features that makes it look less like C# and more like F#. For many .NET developers, this is a scary statement. We also discussed porridge.

If you're looking to learn something by reading the code, I must regretfully inform you that: you won't.

This repo is full of half-baked demos, with just enough veneer and scaffolding to pass muster, but don't look too closely at any of it, please. If you look too hard at any of it, it will fall over.

The code also lacks the most important thing: me, telling you where specifically in each demo to look, and (perhaps most impportant) where not to look.

Things I referred to in the talk:

* CAR Hoare's quote about the billion-dollar mistake: [https://en.wikipedia.org/wiki/Tony_Hoare#Apologies_and_retractions](https://en.wikipedia.org/wiki/Tony_Hoare#Apologies_and_retractions)
* ESLint rules: [http://eslint.org/docs/rules/](http://eslint.org/docs/rules/)
* TSLint rules: [https://palantir.github.io/tslint/rules/](https://palantir.github.io/tslint/rules/)
* Structural type system: [https://en.wikipedia.org/wiki/Structural_type_system](https://en.wikipedia.org/wiki/Structural_type_system)
* 2016 Advent of Code day 12 solutions: [https://www.reddit.com/r/adventofcode/comments/5hus40/2016_day_12_solutions/](https://www.reddit.com/r/adventofcode/comments/5hus40/2016_day_12_solutions/) - this problem was the basis for the demo

Installing
----------

```#install pre-requisites
npm install -g typescript
npm install -g tslint
npm install -g eslint

#go to each folder and run:
npm install

#install TypeScript, TSLint, and ESLint extensions to VS Code```

While the instructions above work, probably, just know that this code is only good enough to be loaded in VS Code and inspected therein.
