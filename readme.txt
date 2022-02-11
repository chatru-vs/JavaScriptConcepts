mark and sweep algorithm - garbage collector
inlining
copy elision
inline caching
JIT compiler
AOT compiler
AST Explorer
googel v8 => ignition(interpretor) + turbofan(compiler)

V8 first generates an abstract syntax tree with its own parser.[12] Then, Ignition generates bytecode from this syntax tree using the internal V8 bytecode format.[13] TurboFan compiles this bytecode into machine code. In other words, V8 compiles ECMAScript directly to native machine code using just-in-time compilation before executing it.[14] The compiled code is additionally optimized (and re-optimized) dynamically at runtime, based on heuristics of the code's execution profile. Optimization techniques used include inlining, elision of expensive runtime properties, and inline caching. The garbage collector is a generational incremental collector.[15]