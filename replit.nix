{ pkgs }: {
    deps = [
      pkgs.deno
      pkgs.rustup
      pkgs.rustc
      pkgs.rustfmt
      pkgs.cargo
      pkgs.cargo-edit
      pkgs.rust-analyzer
    ];
}
