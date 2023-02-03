const wasmCode = await Deno.readFile("./target/wasm32-unknown-unknown/debug/wasm_deno.wasm");
const wasmModule = new WebAssembly.Module(wasmCode);
const wasmInstance = new WebAssembly.Instance(wasmModule);