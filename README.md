# caesar
シーザー暗号を復号化するCLI command.

# Installation
```bash
$ npm i -g caesar
```

# Usage
```bash
$ caesar --help

  Usage: caesar [options]

  Options:

    -h, --help                   output usage information
    -V, --version                output the version number
    -i, --index                  Print index
    -r, --range <first>..<last>  A range

$ caesar -r 1..5 "Ebiil Tloia."
Fcjjm Umpjb.
Gdkkn Vnqkc.
Hello World.
Ifmmp Xpsme.
Jgnnq Yqtnf.

$ caesar -r 1..5 -i "Ebiil Tloia."
1	: Fcjjm Umpjb.
2	: Gdkkn Vnqkc.
3	: Hello World.
4	: Ifmmp Xpsme.
5	: Jgnnq Yqtnf.
```