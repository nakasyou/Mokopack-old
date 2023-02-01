import subprocess
import shutil
subprocess.run("cargo build --target wasm32-unknown-unknown".split(" "))
shutil.copyfile("./target/wasm32-unknown-unknown/debug/main.wasm", "./rs-wasm/build/main.wasm")