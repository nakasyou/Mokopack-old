const wasmPath = new URL("../../rs-wasm/build/main.wasm", import.meta.url)
const wasmCode = await Deno.readFile(wasmPath);
const wasmModule = new WebAssembly.Module(wasmCode);
console.log(wasmModule)
const wasmInstance = new WebAssembly.Instance(wasmModule);